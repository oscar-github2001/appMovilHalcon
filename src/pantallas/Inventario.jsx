import { useColorScheme, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { crearEstilos } from "../estilos/Inventario.style.js";
import React, { useState } from "react";
import { cambiarInventario } from "../redux/inventarioSlice.js";
import BotonesDetalle from "../componentes/BotonesDetalle.jsx";
import ModalProducto from "../componentes/ModalProducto.jsx";

const Inventario = () => {
  const { navigate } = useNavigation();
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  const dispatch = useDispatch();
  const { producto, idProd, bodegas, codigo } = useSelector(
    (state) => state.inventario
  );

  const { sucursales } = useSelector((state) => state.seguridad);
  const sucursalInicio = sucursales.sucursal
    ? sucursales.sucursal
    : sucursales[0].sucursal;
  let totalExis = 0;
  if (bodegas)
    bodegas.forEach((elemento) => {
      totalExis += elemento.existencia;
    });

  const [isModalVisible, setModalVisible] = useState(false);
  const abrirModal = () => {
    setModalVisible(true);
  };
  const cerrarModal = () => {
    setModalVisible(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Verificar si hay un producto y abrir el modal si es así
      if (producto) {
        abrirModal();
      }
    }, [producto])
  );
  return (
    <>
      <View style={estilos.contenedor}>
        <BotonesDetalle
          tipo={"grande"}
          accion={() => {
            navigate("EscanearProducto", { tipoEscaneo: "camara" });
          }}
          nombre={"Escanear Producto"}
        />
        <View style={estilos.separador} />
        <BotonesDetalle
          tipo={"grande"}
          accion={() => {
            navigate("EscanearProducto", { tipoEscaneo: "escrito" });
          }}
          nombre={"Escribir Producto"}
        />
      </View>
      <ModalProducto
        abrirModal={isModalVisible}
        cerrarModal={cerrarModal}
        producto={producto}
        idProd={idProd}
        bodegas={bodegas}
        totalExis={totalExis}
        dispatch={dispatch}
        cambiarInventario={cambiarInventario}
        sucursales={sucursalInicio}
        codigo={codigo}
      />
    </>
  );
};

export default Inventario;
