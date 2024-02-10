import { View, Text, useColorScheme } from "react-native";
import { crearEstilos } from "../estilos/Inicio.style";
import React from "react";
function Inicio() {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>
        Sistema de Autorización de salidas de Inventario, EL HALCÓN
      </Text>
    </View>
  );
}
export default Inicio;
