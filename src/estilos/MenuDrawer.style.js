import colores from "../constantes/colores";
import { TAMANIOS } from "../constantes/tema";
import { StyleSheet } from "react-native";
export const crearEstilos = (scheme) => {
  const esModoOscuro = scheme === "dark";
  return StyleSheet.create({
    contenedor: {
      flex: 1,
      backgroundColor: esModoOscuro
        ? colores.terciarioOscuro
        : colores.primarioClaro,
    },
    cabecera: {
      paddingTop: 50,
      paddingHorizontal: 20,
      paddingBottom: 20,
      backgroundColor: esModoOscuro
        ? "#2D2D2E"
        : colores.principalClaro,
    },
    logo: {
      height: 60,
      width: 60,
      borderRadius: 40,
      marginBottom: 10,
    },
    nombre: {
      color: colores.secundarioOscuro,
      fontSize: TAMANIOS.large,
      fontFamily: "quicksand-bold",
      marginBottom: 2,
    },
    contenedorNombreUsuario: {
      flexDirection: "row",
    },
    nombreUsuario: {
      color: colores.secundarioOscuro,
      fontFamily: "quicksand-semibold",
      marginRight: 5,
    },
    contenedorElementosDrawer: {
      flex: 1,
      paddingTop: 10,
    },
    pie: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: "#ccc",
    },
    botonCerrarSesion: {
      paddingVertical: 15,
    },
    contenidoBotonCerrarSesion: {
      flexDirection: "row",
      alignItems: "center",
    },
    textoBotonCerrarSesion: {
      fontSize: TAMANIOS.medium,
      fontFamily: "quicksand-semibold",
      marginLeft: 5,
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
    icono: {
      color: esModoOscuro ? colores.secundarioOscuro : colores.secundarioClaro,
    },
  });
};