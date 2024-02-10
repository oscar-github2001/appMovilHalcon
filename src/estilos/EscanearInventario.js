import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    contendorIconos: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 10
    },
    icono: {
      borderRadius: 50,
      width: 65,
      height: 65,
      justifyContent: "center",
      alignItems: "center",
    },
    ///
    contenedorBuscarEscrito: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
    textoTitulo: {
      fontSize: TAMANIOS.xLarge,
      fontFamily: "playpenSans-bold",
      color: esModoOscuro ? colores.secundarioOscuro : colores.principalClaro,
      alignSelf: "center"
    },
    separador: {
      marginBottom: 10
    }
  });
};
