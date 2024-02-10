import {
  View,
  Text,
  ScrollView,
  useColorScheme,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colores from "../constantes/colores.js";
import { useSelector } from "react-redux";
import { crearEstilos } from "../estilos/Perfil.style.js";
import React from "react";
const Perfil = () => {
  const { firstName, lastName, username, sucursales } = useSelector(
    (state) => state.seguridad
  );
  const sucursalInicio = sucursales.sucursal
    ? sucursales.sucursal
    : sucursales[0].sucursal;
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.scrollView}>
        <View style={estilos.contenedorPerfil}>
          <View style={estilos.encabezado}>
            <FontAwesome
              name="user-circle-o"
              size={100}
              color={
                scheme === "dark" ? colores.cuatroOscuro : colores.cuatroClaro
              }
            />
            <Text style={estilos.nombre}>{firstName + " " + lastName}</Text>
          </View>
          <View style={estilos.informacion}>
            <Text style={estilos.tituloInfo}>INFORMACIÓN</Text>
          </View>
          <View style={estilos.informacion}>
            <Text style={estilos.detalleInfo}>Nombre: </Text>
            <Text style={estilos.detalleInfo}>{firstName}</Text>
          </View>
          <View style={estilos.informacion}>
            <Text style={estilos.detalleInfo}>Apellido: </Text>
            <Text style={estilos.detalleInfo}>{lastName}</Text>
          </View>
          <View style={estilos.informacion}>
            <Text style={estilos.detalleInfo}>Usuario: </Text>
            <Text style={estilos.detalleInfo}>{username}</Text>
          </View>
          <View style={estilos.informacion}>
            <Text style={estilos.detalleInfo}>Sucursal: </Text>
            <Text style={estilos.detalleInfo}>{sucursalInicio}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Perfil;