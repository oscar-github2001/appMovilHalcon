import { View, Text, useColorScheme, ScrollView } from "react-native";
import { crearEstilos } from "../estilos/TarjetaBodega.style.js";
const TarjetaBodega = ({ empresa, bodega, existencia }) => {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedorBodega}>
      <Text style={estilos.textoTitulo}>{empresa}</Text>
      <ScrollView>
        <View style={estilos.contenedorDetalle}>
          <Text style={estilos.textoTitulo}>Bodega</Text>
          <Text style={estilos.textoSecundario}>{bodega}</Text>
        </View>
        <View style={estilos.contenedorDetalle}>
          <Text style={estilos.textoTitulo}>Existencia</Text>
          <Text style={estilos.textoSecundario}>{existencia}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default TarjetaBodega;
