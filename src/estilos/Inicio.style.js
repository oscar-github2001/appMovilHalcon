import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
import { TAMANIOS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 25,
      backgroundColor: esModoOscuro
        ? colores.primarioOscuro
        : colores.primarioClaro,
    },
    texto: {
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
      fontSize: TAMANIOS.xLarge,
      textAlign: "center",
      fontFamily: "playpenSans-bold",
    },
  });
};
