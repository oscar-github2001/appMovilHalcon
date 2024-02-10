import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: esModoOscuro ? colores.primarioOscuro : colores.primarioClaro
    },
  });
};
