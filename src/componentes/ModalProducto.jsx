import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  useColorScheme,
  SectionList,
} from "react-native";
import CajasTexto from "../componentes/CajasTexto.jsx";
import Etiqueta from "./Etiqueta.jsx";
import TarjetaBodega from "./TarjetaBodega.jsx";
import { crearEstilos } from "../estilos/ModalProducto.style.js";
const ModalProducto = ({
  abrirModal,
  cerrarModal,
  producto,
  idProd,
  bodegas,
  totalExis,
  dispatch,
  cambiarInventario,
  sucursales,
  codigo,
}) => {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={abrirModal}
      onRequestClose={() => cerrarModal()}
    >
      <View style={estilos.contenedorModal}>
        <View style={estilos.contenidoModal}>
          <SectionList
            sections={[{ data: bodegas ? bodegas : "" }]}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={({ item: prod }) => (
              <TarjetaBodega
                empresa={prod.empresa}
                bodega={prod.bodega}
                existencia={prod.existencia}
              />
            )}
            renderSectionHeader={() => (
              <>
                <Text style={estilos.tituloModal}>{producto}</Text>
                <Etiqueta nombre={"Código Compuesto: "} />
                <CajasTexto editable={false} value={idProd} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Código de Barras: "} />
                <CajasTexto editable={false} value={codigo} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Sucursal: "} />
                <CajasTexto editable={false} value={sucursales} />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Existencia Total: "} />
                <CajasTexto editable={false} value={totalExis.toString()} />
                <View style={estilos.separador} />
                {bodegas && (
                  <>
                    <Etiqueta nombre={"Existencia: "} />
                    <View style={estilos.separador} />
                  </>
                )}
              </>
            )}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              dispatch(cambiarInventario(null));
              cerrarModal();
            }}
          >
            <View>
              <Text style={estilos.textCerrar}>Cerrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalProducto;
