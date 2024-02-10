import { TouchableOpacity, Text, View } from "react-native";
import { cerrarSesionSistema } from "../sevicios/endpoints.js";
import { crearEstilos } from "../estilos/BarraEncabezado.style.js";
const BarraEncabezado = () => {
  const cerrarSesion = async () => {
    try {
      await cerrarSesionSistema();
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };
  const estilos = crearEstilos();
  return (
    <View style={estilos.contenedor}>
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => {
          cerrarSesion();
        }}
      >
        <Text style={estilos.texto}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BarraEncabezado;