import colores from "../constantes/colores";
import { StyleSheet } from "react-native";
import { TAMANIOS, SHADOWS } from "../constantes/tema";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: esModoOscuro
        ? colores.primarioOscuro
        : colores.primarioClaro,
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: "center",
    },
    contenedorPerfil: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 20,
      backgroundColor: esModoOscuro
        ? colores.terciarioOscuro
        : colores.terciarioClaro,
      ...SHADOWS.medium
    },
    encabezado: {
      alignItems: "center",
    },
    nombre: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.xLarge,
      color: esModoOscuro ? colores.cuatroOscuro : colores.cuatroClaro,
    },
    informacion: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      paddingVertical:10,
      borderColor: esModoOscuro ? colores.cuatroOscuro : colores.cuatroClaro,
    },
    detalleInfo: {
      fontFamily: "quicksand-semibold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.cuatroOscuro : colores.cuatroClaro,
    },
    tituloInfo: {
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.medium,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
  });
};
