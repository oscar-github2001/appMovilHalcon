import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
import { TAMANIOS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      flex: 1,
      backgroundColor: esModoOscuro
        ? colores.primarioOscuro
        : colores.primarioClaro,
    },
    titulo: {
      textAlign: "center",
      fontSize: TAMANIOS.medium,
      //paddingBottom: 10,
      fontFamily: "quicksand-bold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    separador: {
      marginBottom: 5
    }
  });
};