import React from "react";
import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
import { crearEstilos } from "../estilos/BotonesDetalle.style.js";
export default function BotonesDetalle({ nombre, icon, accion, tipo }) {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <>
      {tipo !== "grande" ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={estilos.estilosBoton}
          onPress={() => accion()}
        >
          <View style={estilos.posicionContenidoBoton}>
            {icon}
            <Text style={{ ...estilos.contenidoBotonTexto }}>{nombre}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => accion()}
          activeOpacity={0.7}
          style={estilos.botonEnviar}
        >
          <View style={estilos.posicionContenidoBoton}>
            {icon}
            <Text style={estilos.botonEnviarTexto}>{nombre}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
