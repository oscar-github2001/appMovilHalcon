import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
import { SHADOWS, TAMANIOS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedorTerjetaProduc: {
      flex: 1,
      flexDirection: "column",
      borderRadius: 10,
      width: "100%",
      height: 240,
      paddingHorizontal: 15,
      backgroundColor: esModoOscuro
        ? colores.terciarioOscuro
        : colores.terciarioClaro,
      ...SHADOWS.medium,
      paddingVertical: 15,
      //borderWidth: 2,
      //borderColor: esModoOscuro ? colores.secundarioOscuro : colores.cuatroClaro
    },
    separador: {
      borderWidth: 1,
      borderBottomColor: colores.secundarioOscuro,
      marginVertical: 5,
    },
    textoNegrita: {
      fontSize: TAMANIOS.medium,
      fontWeight: "700",
      fontFamily: "quicksand-bold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    contenidoTarjetaProduc: {
      flexDirection: "columns",
      width: "100%",
    },
    estructuraDetalle: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    textSubtitulo: {
      fontFamily: "quicksand-semibold",
      fontSize: TAMANIOS.medium,
      fontWeight: "700",
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    textoNormal: {
      fontFamily: "quicksand-medium",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
  });
};
