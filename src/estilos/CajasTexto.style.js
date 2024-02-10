import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
import { SHADOWS, TAMANIOS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flexDirection: "row",
      paddingVertical: 12,
      color: esModoOscuro
        ? colores.secundarioOscuro
        : colores.secundarioClaro,
      backgroundColor: esModoOscuro
        ? colores.terciarioOscuro
        : colores.terciarioClaro,
      paddingHorizontal: 15,
      borderRadius: 10,
      width: "100%",
      ...SHADOWS.small
    },

    cajaTexto: {
      flex: 1,
      fontFamily: "quicksand-medium",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro
        ? colores.secundarioOscuro
        : colores.secundarioClaro,
      height: "100%",
      width: "100%"
    },
    error: {
      alignSelf: "flex-start",
      fontSize: TAMANIOS.medium,
      fontFamily: "quicksand-bold",
      color: esModoOscuro ? colores.errorOscuro : colores.errorClaro,
    },
  });
};
