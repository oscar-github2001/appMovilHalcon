import { View, Text, useColorScheme, ScrollView } from "react-native";
import { crearEstilos } from "../estilos/TarjetaProductos.style";
const TarjataProductos = ({
  codigo,
  costo,
  bodega,
  descripcion,
  importe,
  cantidad,
}) => {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedorTerjetaProduc}>
      <ScrollView nestedScrollEnabled={true}>
        <Text style={estilos.textoNegrita}>{codigo}</Text>
        <View style={estilos.separador} />
        <Text style={estilos.textoNegrita}>Bodega</Text>
        <Text style={estilos.textoNormal}>{bodega}</Text>
        <View style={estilos.separador} />
        <View style={estilos.estructuraDetalle}>
          <View>
            <Text style={estilos.textSubtitulo}>Cantidad</Text>
            <Text style={estilos.textoNormal}>{cantidad}</Text>
          </View>
          <View>
            <Text style={estilos.textSubtitulo}>Costo</Text>
            <Text style={estilos.textoNormal}>{costo}</Text>
          </View>
          <View>
            <Text style={estilos.textSubtitulo}>Total</Text>
            <Text style={estilos.textoNormal}>{importe}</Text>
          </View>
        </View>
        <Text style={estilos.textoNormal}>{descripcion}</Text>
      </ScrollView>
    </View>
  );
};
export default TarjataProductos;
