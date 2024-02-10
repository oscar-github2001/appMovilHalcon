import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = () => {
  return StyleSheet.create({
    contenedor: {
      flexDirection: "row",
      alignItems: "center",
    },
    texto: {
      fontFamily: "quicksand-semibold",
      color: colores.secundarioOscuro,
      fontSize: TAMANIOS.mediumsmall
    },
  });
};