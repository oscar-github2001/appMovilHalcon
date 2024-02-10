import { Text, useColorScheme } from "react-native";
import { crearEstilos } from "../estilos/Etiqueta.style.js";
const Etiqueta = ({ nombre }) => {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return <Text style={estilos.etiqueta}>{nombre}</Text>;
};
export default Etiqueta;
