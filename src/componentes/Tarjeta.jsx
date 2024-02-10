import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { crearEstilos } from "../estilos/Tarjeta.style.js";
import BotonesDetalle from "./BotonesDetalle.jsx";
import colores from "../constantes/colores.js";
import { alertaAdvertencia, alertaMensaje } from "../utiles/alertas.js";
import * as Device from "expo-device";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { asignarCodigoBarra } from "../sevicios/endpoints.js";
import Loading from "./Loading.jsx";
export default function Tarjeta({ descripcionProducto, idProd }) {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  const nombreMovil = Device.deviceName;
  const { navigate } = useNavigation();
  const { codigo } = useSelector((state) => state.inventario);
  const { username } = useSelector((state) => state.seguridad);
  const [loading, setLoading] = useState(false);
  const asigarCodigoProducto = async () => {
    try {
      setLoading(true);
      let datos = {
        codigoCompuesto: idProd,
        codigoBarra: codigo,
        usuario: username,
        pc: nombreMovil,
      };
      const respuesta = await asignarCodigoBarra(datos);
      alertaMensaje(respuesta.message, "");
      navigate("Inventario");
    } catch (error) {
      console.error("Error al asignar código de barra al producto", error);
    } finally{
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={estilos.contenedorLista} accessibilityRole="button">
          <ScrollView nestedScrollEnabled={true}>
            <Text style={estilos.textoTitulo}>{descripcionProducto}</Text>
            <View style={estilos.separador}></View>
            <View style={estilos.codigo}>
              <Text style={estilos.textoTitulo}>Codigo compuesto</Text>
              <Text style={estilos.textoSecundario}>{idProd}</Text>
            </View>
          </ScrollView>
          <View style={estilos.contenedorBoton}>
            <BotonesDetalle
              nombre={"Asignar"}
              icon={
                <Ionicons
                  name="checkmark-circle-sharp"
                  size={22}
                  color={colores.secundarioOscuro}
                  style={{ alignSelf: "center" }}
                />
              }
              accion={() => {
                alertaAdvertencia(
                  `Asignar ${codigo} a ${descripcionProducto}?`,
                  "Click si estás seguro.",
                  () => navigate("Inventario"),
                  "¡Sí, Seguro!",
                  () => asigarCodigoProducto()
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}
