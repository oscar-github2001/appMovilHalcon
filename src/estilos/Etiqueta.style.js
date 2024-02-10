import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    etiqueta: {
      alignSelf: "flex-start",
      marginBottom: 1,
      fontSize: TAMANIOS.medium,
      fontFamily: "quicksand-semibold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
  });
};
