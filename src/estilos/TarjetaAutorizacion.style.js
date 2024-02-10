import colores from "../constantes/colores";
import { SHADOWS, TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      height: 350,
      borderRadius: 10,
      ...SHADOWS.medium,
      paddingVertical: 15,
      backgroundColor: esModoOscuro
        ? colores.terciarioOscuro
        : colores.terciarioClaro,
      paddingHorizontal: 15
    },
    titulo: {
      paddingLeft: 20,
      flexDirection: "column",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    textoTituloPrincipal: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.large,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },

    textoTituloSecundario: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    contenido: {
      flexDirection: "column",
    },
    texto: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 3,
    },
    textPrincipal: {
      fontFamily: "quicksand-semibold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    textSecundario: {
      fontFamily: "quicksand-medium",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    botones: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: 10,
      justifyContent: "space-evenly",
    },
    contenedorBoton: {
      width: "49%"
    }
  });
};
