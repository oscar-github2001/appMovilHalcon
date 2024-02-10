import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
import { SHADOWS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedorLista: {
      width: "100%",
      backgroundColor: esModoOscuro ? colores.terciarioOscuro : colores.terciarioClaro,
      paddingHorizontal: 15,
      ...SHADOWS.small,
      paddingVertical: 15,
      borderRadius: 10,
      height: 170
    },
    codigo: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    textoSecundario: {
      fontFamily: "quicksand-medium",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro
    },
    textoTitulo: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro
    },
    contenedorBoton: {
      paddingTop: 5
    },
    separador: {
      borderWidth: 1,
      borderBottomColor: colores.secundarioOscuro,
      marginVertical: 5,
    },
  });
};
