import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: esModoOscuro ? colores.primarioOscuro : colores.primarioClaro,
    },
    separador: {
      marginBottom: 10
    }
  });
};