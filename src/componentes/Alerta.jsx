import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  useColorScheme,
} from "react-native";
import { crearEstilos } from "../estilos/Alerta.style";

function Alerta({
  abrirModal,
  pregunta,
  contenido,
  textoConfirmar,
  textoCalcelar,
  cancelar,
  confirmar,
}) {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={abrirModal}
      onRequestClose={() => modalSucCerrada()}
    >
      <View style={estilos.contenedorPrincipal}>
        <View style={estilos.Modal}>
          <View style={{ height: "35%", backgroundColor: "white" }}>
            <Text style={[estilos.tituloModal, estilos.titulo]}>
              {pregunta}
            </Text>
          </View>
          <View style={{ height: "35%",backgroundColor: "white" }}>
            {contenido && (
              <Text style={[estilos.tituloModal, estilos.normal]}>
                {contenido}
              </Text>
            )}
          </View>
          <View style={{ height: "30%", backgroundColor: "white" }}>
            {textoCalcelar && (
              <TouchableOpacity
                onPress={() => cancelar}
                activeOpacity={0.7}
                style={estilos.botones}
              >
                <Text
                  style={[estilos.textoBotones, estilos.textoBotonCancelar]}
                >
                  {textoCalcelar}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => confirmar()}
              activeOpacity={0.7}
              style={estilos.botones}
            >
              <Text style={[estilos.textoBotones, estilos.textoBotonOk]}>
                {textoConfirmar}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default Alerta;
