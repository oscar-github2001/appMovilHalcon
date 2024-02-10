import { StyleSheet } from "react-native";
import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: esModoOscuro
        ? colores.primarioOscuro
        : colores.secundarioOscuro,
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
    },
    separador: {
      marginBottom: 15,
    },
    textoTitulo: {
      textAlign: "center",
      fontSize: TAMANIOS.xLarge,
      fontFamily: "playpenSans-bold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.principalClaro,
    },
    logoLogin: {
      height: 120,
      width: 120,
      justifyContent: "center",
      alignSelf: "center",
    }
  });
};
