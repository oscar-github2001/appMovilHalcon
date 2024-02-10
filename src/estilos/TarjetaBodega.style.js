import colores from "../constantes/colores";
import { TAMANIOS, SHADOWS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedorBodega: {
      backgroundColor: esModoOscuro ? colores.terciarioOscuro : colores.terciarioClaro,
      paddingHorizontal: 15,
      borderRadius: 10,
      paddingVertical: 15,
      ...SHADOWS.medium,
      borderWidth: 2,
      borderColor: esModoOscuro ? colores.secundarioOscuro : colores.terciarioOscuro,
      height: 140
    },
    // contenedorTitulo: {
    //   paddingLeft: 20,
    //   // marginBottom: 10
    // },
    textoTitulo: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro
    },
    textoSecundario: {
      fontFamily: "quicksand-medium",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro
    },
  
    contenedorDetalle: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  });
};
