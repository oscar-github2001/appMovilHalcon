import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedorModal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    contenidoModal: {
      backgroundColor: esModoOscuro ? colores.primarioOscuro : colores.primarioClaro,
      padding: 20,
      borderRadius: 16,
      elevation: 5,
      width: "95%",
      maxHeight: "95%"
    },
    tituloModal: {
      fontSize: TAMANIOS.large,
      marginBottom: 10,
      textAlign: "center",
      fontFamily: "quicksand-bold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    botonOpcion: {
      backgroundColor: esModoOscuro ? colores.principalOscuro : colores.principalClaro,
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
      fontSize: TAMANIOS.medium,
      fontFamily: "quicksand-medium"
    },
    textoOpcion: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
    },
    textCerrar: {
      fontSize: TAMANIOS.xLarge,
      fontFamily: "quicksand-bold",
      color: esModoOscuro ? colores.errorOscuro : colores.errorClaro
    },
    separador: {
      marginBottom: 5
    }
  });
};
