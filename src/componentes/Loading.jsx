import { crearEstilos } from "../estilos/Loading.style.js";
import { View, ActivityIndicator, useColorScheme } from "react-native";
import colores from "../constantes/colores.js";
export default function Loading() {
    const scheme = useColorScheme();
    const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <ActivityIndicator size="large" color= {scheme === "dark" ? colores.principalOscuro : colores.principalClaro} />
    </View>
  );
}
