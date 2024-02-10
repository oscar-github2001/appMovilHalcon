import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  useColorScheme,
} from "react-native";
import { useDispatch } from "react-redux";
import { crearEstilos } from "../estilos/ModalSucursales.style";
import { iniciarAutenticacion } from "../redux/autenticacionSlice";

function ModalSucursales({ abrirModal, modalSucCerrada, infoUsuario }) {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  const dispatch = useDispatch();

  const guardarSucursal = (sucursal) => {
    dispatch(
      iniciarAutenticacion({
        firstName: infoUsuario.firstName,
        id: infoUsuario.id,
        lastName: infoUsuario.lastName,
        roles: infoUsuario.roles,
        token: infoUsuario.token,
        username: infoUsuario.username,
        sucursales: sucursal,
      })
    );
    modalSucCerrada();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={abrirModal}
      onRequestClose={() => modalSucCerrada()}
    >
      <View style={estilos.contenedorModal}>
        <View style={estilos.contenidoModal}>
          <Text style={estilos.tituloModal}>Elija una Sucursal</Text>
          <FlatList
            data={infoUsuario.sucursales}
            keyboardShouldPersistTaps="handled"
            style={estilos.flatList}
            renderItem={({ item: suc }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={estilos.botonOpcion}
                onPress={() => guardarSucursal(suc)}
              >
                <Text style={estilos.textoOpcion}>{suc.sucursal}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

export default ModalSucursales;
