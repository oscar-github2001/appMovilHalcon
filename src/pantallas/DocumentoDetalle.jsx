import React, { useReducer, useEffect, useLayoutEffect, useState } from "react";
import { View, Text, useColorScheme, SectionList } from "react-native";
import {
  aplicarDocumentoSalida,
  detalleDocumentoSalida,
} from "../sevicios/endpoints.js";
import { alertaMensaje, alertaAdvertencia } from "../utiles/alertas.js";
import { crearEstilos } from "../estilos/DocumentoDetalle.style.js";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Etiqueta from "../componentes/Etiqueta.jsx";
import colores from "../constantes/colores.js";
import TarjetaProductos from "../componentes/TarjetaProductos.jsx";
import BotonesDetalle from "../componentes/BotonesDetalle.jsx";
import CajasTexto from "../componentes/CajasTexto.jsx";
import Loading from "../componentes/Loading.jsx";

// Define los tipos de acciones que puede realizar tu componente
const ACTIONS = {
  SET_DETALLE_PRODUCTOS: "SET_DETALLE_PRODUCTOS",
};

// Define el reducer que manejará los diferentes estados de tu componente
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DETALLE_PRODUCTOS:
      return { ...state, detalleproductos: action.payload };
    default:
      return state;
  }
};

const DocumentoDetalle = ({ route }) => {
  const navegacion = useNavigation();
  const scheme = useColorScheme();
  const { doc } = route.params;
  const estilos = crearEstilos(scheme);
  const [loading, setLoading] = useState(false);

  // Inicializa el estado utilizando useReducer
  const [state, dispatch] = useReducer(reducer, {
    detalleproductos: [],
  });

  useLayoutEffect(() => {
    navegacion.setOptions({
      headerTitle: "Documento N° " + doc.noDoc,
    });
  });

  useEffect(() => {
    const Detalle = async () => {
      try {
        setLoading(true);
        const data = {
          noDoc: doc.noDoc,
          idTipoDoc: doc.idTipoDoc,
          idEmpresa: doc.idEmpresa,
        };
        // Utiliza dispatch para actualizar el estado en lugar de setDetalleProductos
        dispatch({
          type: ACTIONS.SET_DETALLE_PRODUCTOS,
          payload: await detalleDocumentoSalida(data),
        });
      } catch (error) {
        console.log("Error al obtener detalleDocumentoSalida", error);
      } finally {
        setLoading(false);
      }
    };
    Detalle();
  }, []);

  const AutorizarSalidas = (noDoc, idTipoDoc, idEmpresa) => {
    let data = {
      noDoc: noDoc,
      idTipoDoc: idTipoDoc,
      idEmpresa: idEmpresa,
    };
    alertaAdvertencia(
      "¿Quieres Autorizar la salida?",
      "¡Click, si estás seguro!",
      null,
      "¡Sí, Autorizar!",
      () => postAutorizar(data)
    );
  };

  const postAutorizar = async (data) => {
    try {
      setLoading(true);
      const respuesta = await aplicarDocumentoSalida(data);
      alertaMensaje("¡Hecho!", respuesta.message);
      navegacion.navigate("Autorizacion");
    } catch (error) {
      console.error("Error al aplicar la salida: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={estilos.contenedor}>
          <SectionList
            sections={[{ data: state.detalleproductos }]}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 15 }} />}
            renderItem={({ item: prod }) => (
              <TarjetaProductos
                codigo={prod.codigo}
                costo={prod.costo}
                bodega={prod.bodega}
                descripcion={prod.descripcion}
                importe={prod.importe}
                cantidad={prod.cantidad}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <>
                <Etiqueta nombre={"Empresa: "} />
                <CajasTexto value={doc.empresa} editable={false} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Fecha: "} />
                <CajasTexto value={doc.fecha} editable={false} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Usuario: "} />
                <CajasTexto value={doc.usuario} editable={false} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Sucursal: "} />
                <CajasTexto value={doc.sucursal} editable={false} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Monto: "} />
                <CajasTexto value={doc.total} editable={false} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Comentarios: "} />
                <CajasTexto
                  inputType={"comentarios"}
                  value={doc.comentarios}
                  editable={false}
                />
                <View style={estilos.separador} />
                <Text style={estilos.titulo}>Productos</Text>
                <View style={estilos.separador} />
              </>
            )}
          />
          <View style={estilos.separador} />
          <View style={estilos.contenedorBoton}>
            <BotonesDetalle
              tipo={"grande"}
              accion={() =>
                AutorizarSalidas(doc.noDoc, doc.idTipoDoc, doc.idEmpresa)
              }
              icon={
                <Ionicons
                  name="checkmark-circle-sharp"
                  size={24}
                  color={colores.secundarioOscuro}
                  style={{ alignSelf: "center" }}
                />
              }
              nombre={"Autorizar"}
            />
          </View>
        </View>
      )}
    </>
  );
};
export default DocumentoDetalle;
