import colores from "../constantes/colores";
import { TAMANIOS, SHADOWS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: 15,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: esModoOscuro ? colores.primarioOscuro : colores.primarioClaro,
    },
    separador: {
      marginBottom: 10
    }
  });
};
