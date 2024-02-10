import colores from "../constantes/colores";
import { TAMANIOS, SHADOWS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    //pequenios
    estilosBoton: {
      width: "100%",
      borderRadius: 10,
      backgroundColor: esModoOscuro
        ? colores.principalOscuro
        : colores.principalClaro,
      ...SHADOWS.large          
    },
    contenidoBotonTexto: {
      color: colores.secundarioOscuro,
      fontSize: TAMANIOS.medium,
      fontFamily: "quicksand-semibold",
      paddingVertical: 5,
    },
    ///
    posicionContenidoBoton: {
      flexDirection: "row",
      justifyContent: "center",
    },
    ///
    //grandes
    botonEnviar: {
      width: "100%",
      padding: 10,
      borderRadius: 10,
      ...SHADOWS.large,
      backgroundColor: esModoOscuro
        ? colores.principalOscuro
        : colores.principalClaro,
    },
    botonEnviarTexto: {
      color: colores.secundarioOscuro,
      fontSize: TAMANIOS.large,
      fontFamily: "quicksand-bold",
    }
  });
};
