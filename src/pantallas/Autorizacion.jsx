import React, { useState, useEffect } from "react";
import { FlatList, View, useColorScheme } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { alertaAdvertencia, alertaMensaje } from "../utiles/alertas.js";
import {
  obtenerDocumentosSalida,
  aplicarDocumentoSalida,
} from "../sevicios/endpoints.js";
import { AntDesign, Feather } from "@expo/vector-icons";
import { crearEstilos } from "../estilos/Autorizacion.style.js";
import TarjetaAutorizacion from "../componentes/TarjetaAutorizacion.jsx";
import CajasTexto from "../componentes/CajasTexto.jsx";
import colores from "../constantes/colores.js";
import Loading from "../componentes/Loading.jsx";

const Autorizacion = () => {
  const scheme = useColorScheme();
  const [busqueda, setBusqueda] = useState("");
  const establecerBusqueda = (query) => setBusqueda(query);
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(false);

  const ObtenerDocumentos = async () => {
    try {
      setLoading(true);
      setDocumentos(await obtenerDocumentosSalida());
    } catch (error) {
      console.error("Error al obtener a la API:", error);
    } finally{
      setLoading(false);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      ObtenerDocumentos();
      setBusqueda("");
    }, [])
  );

  useEffect(() => {
    ObtenerDocumentos();
  }, []);

  const FiltrarDocumentos = documentos.filter((doc) => {
    const textoTarjeta = `${doc.noDoc} ${doc.empresa} ${doc.fecha} ${doc.usuario} ${doc.sucursal} ${doc.total} ${doc.comentarios}`;
    return textoTarjeta.toLowerCase().includes(busqueda.toLowerCase());
  });

  const AutorizarSalidas = (noDoc, idEmpresa, idTipoDoc) => {
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
      ObtenerDocumentos();
      setBusqueda("");
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    } finally{
      setLoading(false);
    }
  };

  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <CajasTexto
        label={"Buscar..."}
        onChangeText={establecerBusqueda}
        value={busqueda}
        keyboardType="email-address"
        fieldButtonLabel={
          busqueda === "" ? (
            <AntDesign
              name="search1"
              size={25}
              color={
                scheme === "dark"
                  ? colores.secundarioOscuro
                  : colores.secundarioClaro
              }
            />
          ) : (
            <Feather
              name="x"
              size={25}
              color={
                scheme === "dark"
                  ? colores.secundarioOscuro
                  : colores.secundarioClaro
              }
            />
          )
        }
        fieldButtonFunction={() => {
          setBusqueda("");
        }}
      />
      {loading && <Loading />}
      {!loading && (
        <>
          <View style={estilos.separador} />
          <FlatList
            data={FiltrarDocumentos}
            ItemSeparatorComponent={<View style={{ marginBottom: 10 }} />}
            renderItem={({ item: doc }) => (
              <TarjetaAutorizacion
                doc={doc}
                AutorizarSalidas={AutorizarSalidas}
              />
            )}
          />
        </>
      )}
    </View>
  );
};
export default Autorizacion;
