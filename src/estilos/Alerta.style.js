import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      Modal: {
        backgroundColor: esModoOscuro ? colores.primarioOscuro : colores.primarioClaro,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 5,
        width: 320,
        height: 200,
        justifyContent: "space-between"
      },
      tituloModal: {
       // marginBottom: 10,
        textAlign: "center",
        color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
      },
      titulo: {
        fontSize: TAMANIOS.xLarge,
        fontFamily: "quicksand-bold",
      },
      normal: {
        fontSize: TAMANIOS.medium,
        fontFamily: "quicksand-medium",
      },
      ///
      botones: {
        marginTop: 10,
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: colores.cuatroClaro,
      },
      textoBotones: {
        paddingVertical: 10,
        textAlign: "center",
        fontSize: TAMANIOS.medium,
        fontFamily: "quicksand-bold",
        color: esModoOscuro ? colores.errorOscuro : colores.errorClaro
      },
      textoBotonOk: {
        color: esModoOscuro ? colores.principalOscuro : colores.principalClaro
      },
      textoBotonCancelar: {
        color: esModoOscuro ? colores.errorOscuro : colores.errorClaro
      }
  });
};
