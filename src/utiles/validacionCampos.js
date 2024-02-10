import * as yup from "yup";

export const validarCampos = yup.object().shape({
    username: yup
        .string()
        .required("Debes llenar el campo usuario"),
    password: yup
        .string()
        .required("Debes llenar el campo contraseña"),
})

export const validarObtener = yup.object().shape({
    obtener: yup
        .number().typeError(
            "Sólo se permiten digitar números.")
        .required("Debes ingresar el código de barras.")
})
