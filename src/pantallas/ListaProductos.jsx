import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  useColorScheme,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { crearEstilos } from "../estilos/ListaProductos.style";
import { AntDesign, Feather } from "@expo/vector-icons";
import colores from "../constantes/colores";
import CajasTexto from "../componentes/CajasTexto";
import { obtenerListaProductos } from "../sevicios/endpoints";
import Tarjeta from "../componentes/Tarjeta";
import Loading from "../componentes/Loading.jsx";
const ListaProductos = () => {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  const [busqueda, setBusqueda] = useState("");
  const [listProducto, setListProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const establecerBusqueda = (query) => setBusqueda(query);

  useEffect(() => {
    const listaProductos = async () => {
      try {
        setLoading(true);
        let datos = {
          buscador: busqueda,
        };
        setListProducto(await obtenerListaProductos(datos));
      } catch (error) {
        console.error("Error al obtener Lista de Productos");
      } finally {
        setLoading(false);
      }
    };
    listaProductos();
  }, [busqueda]);

  // useEffect(() => {
  //   const listaProductos = () => {
  //     try {
  //       let datos = {
  //         buscador: busqueda,
  //       };
  //       const timeOutId = setTimeout(
  //         async () => setListProducto(await obtenerListaProductos(datos)),
  //         0
  //       );
  //       return () => clearTimeout(timeOutId);
  //     } catch (error) {
  //       console.error("Error al obtener Lista de Productos");
  //     }
  //   };
  //   listaProductos();
  // }, [busqueda]);
  // useEffect(() => {
  //   const listaProductos = async () => {
  //     try {
  //       setLoading(true);
  //       if (busqueda === "") {
  //         setLoading(false);
  //       }
  //       let datos = {
  //         buscador: busqueda,
  //       };
  //       const repuesta = await obtenerListaProductos(datos);
  //       setListProducto(repuesta);
  //       const timeOutId = setTimeout(() => {
  //         if (repuesta) {
  //           setLoading(false);
  //         }
  //       }, 1000);
  //       return () => clearTimeout(timeOutId);
  //     } catch (error) {
  //       console.error("Error al obtener Lista de Productos");
  //     }
  //   };
  //   listaProductos();
  // }, [busqueda]);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={estilos.separador} />
          <FlatList
            data={listProducto}
            ItemSeparatorComponent={<View style={{ marginBottom: 10 }} />}
            renderItem={({ item: doc }) => (
              <Tarjeta
                descripcionProducto={doc.descripcionProducto}
                idProd={doc.idProd}
              />
            )}
          />
        </>
      )}
    </View>
  );
};
export default ListaProductos;
