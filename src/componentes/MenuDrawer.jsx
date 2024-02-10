import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import { cerrarSesionSistema } from "../sevicios/endpoints.js";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { crearEstilos } from "../estilos/MenuDrawer.style.js";
import imagenes from "../constantes/imagenes.js";
const MenuDrawer = (props) => {
  const scheme = useColorScheme();
  const { firstName, lastName, username } = useSelector(
    (state) => state.seguridad
  );
  const cerrarSesion = async () => {
    try {
      await cerrarSesionSistema();
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <ScrollView {...props}>
        <View style={estilos.cabecera}>
          <Image source={imagenes.userProfile} style={estilos.logo} />
          <Text style={estilos.nombre}>{firstName + " " + lastName}</Text>
          <View style={estilos.contenedorNombreUsuario}>
            <Text style={estilos.nombreUsuario}>{username}</Text>
          </View>
        </View>
        <View style={estilos.contenedorElementosDrawer}>
          <DrawerItemList {...props} />
        </View>
      </ScrollView>
      <View style={estilos.pie}>
        <TouchableOpacity
          onPress={() => cerrarSesion()}
          style={estilos.botonCerrarSesion}
        >
          <View style={estilos.contenidoBotonCerrarSesion}>
            <Ionicons
              name="exit-outline"
              size={22}
              color={estilos.icono.color}
            />
            <Text style={estilos.textoBotonCerrarSesion}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuDrawer;