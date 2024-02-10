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
        backgroundColor: esModoOscuro ? colores.terciarioOscuro : colores.terciarioClaro,
        padding: 20,
        borderRadius: 16,
        elevation: 5,
        width: "95%",
        height: "27%"
      },
      tituloModal: {
        fontSize: TAMANIOS.large,
        marginBottom: 16,
        textAlign: "center",
        fontFamily: "quicksand-bold",
        color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
      },
      botonOpcion: {
        backgroundColor: esModoOscuro ? colores.principalOscuro : colores.principalClaro,
        padding: 12,
        borderRadius: 8,
        marginVertical: 8
      },
      textoOpcion: {
        fontSize: TAMANIOS.medium,
        fontFamily: "quicksand-medium",
        color: "white",
        textAlign: "center",
      },
  });
};
