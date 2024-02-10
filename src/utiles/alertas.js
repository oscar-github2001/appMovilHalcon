import { Alert } from "react-native";

function alertaAdvertencia(pregunta, mensaje, cancelar, mensajeConf, confirmar) {
  Alert.alert(
    pregunta,
    mensaje,
    [
      {
        text: 'Cancel',
        onPress: () => cancelar ? cancelar() : null,
        style: 'cancel',
      },
      {
        text: mensajeConf,
        onPress: () => confirmar(),
      },
    ],
    {
      textStyle: { fontFamily: "quicksand-semibold" },
    }
  );
}

function alertaMensaje(titulo, mensaje, accionOk) {
  Alert.alert(titulo, mensaje, [{ text: "Ok" }, accionOk ? accionOk() : null],{ textStyle: { fontFamily: "quicksand-semibold" }});
}

export { alertaAdvertencia, alertaMensaje };
