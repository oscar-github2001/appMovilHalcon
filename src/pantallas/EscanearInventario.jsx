import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera"; // Importa el componente Camera de Expo
import { useSelector, useDispatch } from "react-redux";
import { obtenerInventario } from "../sevicios/endpoints.js";
import { useNavigation } from "@react-navigation/native";
import { alertaAdvertencia } from "../utiles/alertas.js";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Formik } from "formik";
import { validarObtener } from "../utiles/validacionCampos.js";
import { useFocusEffect } from "@react-navigation/native";
import {
  iniciarInventario,
  cambiarInventario,
} from "../redux/inventarioSlice.js";
import { crearEstilos } from "../estilos/EscanearInventario.js";
import CajasTexto from "../componentes/CajasTexto.jsx";
import colores from "../constantes/colores.js";
import BotonesDetalle from "../componentes/BotonesDetalle.jsx";
import Loading from "../componentes/Loading.jsx";

export default function EscanearInventario({ route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const { sucursales } = useSelector((state) => state.seguridad);
  const { navigate } = useNavigation();
  const { tipoEscaneo } = route.params;
  const dispatch = useDispatch();
  const cameraRef = useRef(null); // Referencia al componente Camera
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  const [loading, setLoading] = useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     handleBarCodeScanned;
  //   }, [])
  // );

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      setLoading(true);
      dispatch(cambiarInventario(null));
      if (type != BarCodeScanner.Constants.BarCodeType.qr) {
        setScanned(true);
        //data = "0101020401";
        let datos = {
          codigoBarra: data,
          idSucursal: sucursales.idSucursal,
        };
        const resultado = await obtenerInventario(datos);
        dispatch(
          iniciarInventario({
            producto: resultado.producto,
            idProd: resultado.idProd,
            bodegas: resultado.bodegas.length != 0 ? resultado.bodegas : null,
            codigo: data,
          })
        );
        navigate("Inventario");
      }
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error ===
          "No existe el código de barras en el catálogo de productos."
      ) {
        setScanned(true);
        dispatch(cambiarInventario(null));
        dispatch(iniciarInventario({ codigo: data }));
        alertaAdvertencia(
          error.response.data.error,
          `¿Asignar el Código de Barra ${data} a un producto?`,
          () => navigate("Inventario"),
          "¡Sí, Asignar!",
          () => navigate("ListaProductos")
        );
        navigate("Inventario");
      }
    } finally {
      setLoading(false);
    }
  };
  const toggleTorch = () => {
    setTorchOn(!torchOn);
  };

  if (tipoEscaneo === "camara") {
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      };
      getBarCodeScannerPermissions();
    }, []);

    if (hasPermission === null) {
      return <Text>Solicitando permiso de cámara</Text>;
    }
    if (hasPermission === false) {
      return <Text>Sin acceso a la cámara</Text>;
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {tipoEscaneo === "camara" && (
            <View style={estilos.container}>
              <Camera
                ref={cameraRef}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                flashMode={
                  torchOn
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
                } // Controla el estado de la linterna
              />
              <View style={estilos.contendorIconos}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={toggleTorch}
                  style={{
                    ...estilos.icono,
                    backgroundColor: colores.terciarioOscuro,
                  }}
                >
                  <Ionicons
                    name={torchOn ? "flashlight" : "flashlight-outline"}
                    size={45}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigate("Inventario")}
                  style={{
                    ...estilos.icono,
                    backgroundColor: colores.errorOscuro,
                  }}
                >
                  <Entypo name="cross" size={50} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {tipoEscaneo === "escrito" && (
            <Formik
              initialValues={{ obtener: "" }}
              validationSchema={validarObtener}
              onSubmit={(values) => {
                handleBarCodeScanned({
                  type: "escrito",
                  data: values.obtener,
                });
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View
                  style={{
                    ...estilos.contenedorBuscarEscrito,
                    backgroundColor:
                      scheme === "dark"
                        ? colores.primarioOscuro
                        : colores.primarioClaro,
                  }}
                >
                  <Text style={estilos.textoTitulo}>
                    Escribir código de barras
                  </Text>
                  <View style={estilos.separador} />
                  <CajasTexto
                    label={"Código de Barras"}
                    icon={
                      <Feather
                        name="edit"
                        size={25}
                        color={
                          scheme === "dark"
                            ? colores.secundarioOscuro
                            : colores.secundarioClaro
                        }
                        style={{ marginRight: 10 }}
                      />
                    }
                    onChangeText={handleChange("obtener")}
                    onBlur={handleBlur("obtener")}
                    value={values.obtener}
                    errors={errors.obtener}
                  />
                  <View style={estilos.separador} />
                  <BotonesDetalle
                    tipo={"grande"}
                    accion={() => handleSubmit()}
                    nombre={"Buscar"}
                  />
                </View>
              )}
            </Formik>
          )}
        </>
      )}
    </>
  );
}
