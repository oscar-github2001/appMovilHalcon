import React, { useState, useEffect } from "react";
import { Text, View, Image, useColorScheme, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { iniciarAutenticacion } from "../redux/autenticacionSlice.js";
import { alertaMensaje } from "../utiles/alertas.js";
import { inicioSesionOK } from "../sevicios/endpoints.js";
import { validarCampos } from "../utiles/validacionCampos.js";
import { crearEstilos } from "../estilos/Login.style.js";
import imagenes from "../constantes/imagenes.js";
import colores from "../constantes/colores.js";
import Etiqueta from "../componentes/Etiqueta.jsx";
import CajasTexto from "../componentes/CajasTexto.jsx";
import ModalSucursales from "../componentes/ModalSucursales.jsx";
import BotonesDetalle from "../componentes/BotonesDetalle.jsx";
import Loading from "../componentes/Loading.jsx";
import Alerta from "../componentes/Alerta.jsx";
function Login() {
  const scheme = useColorScheme();
  const dispatch = useDispatch();
  const estilos = crearEstilos(scheme);
  const [infoUsuario, establecerInfoUsuario] = useState([]);
  const [abrirModal, establecerAbrirModal] = useState(false);
  const [ejecutarAccion, setEjecutarAccion] = useState(false);
  const [loading, setLoading] = useState(false);
 // const [abrirAlerta, setAbrirAlerta] = useState(false);
  const cerrarModalSuc = () => {
    establecerAbrirModal(false);
  };
  const cerrarAlerta = () => {
    setAbrirAlerta(false);
  };
  useEffect(() => {
    if (ejecutarAccion) {
      manejarEnvio();
      setEjecutarAccion(false);
    }
  }, []);
  const manejarEnvio = async (values) => {
    try {
      setLoading(true);
      const respuesta = await inicioSesionOK(values);
      establecerInfoUsuario(respuesta);
      if (respuesta.sucursales.length > 1) {
        establecerAbrirModal(true);
      } else {
        dispatch(iniciarAutenticacion(respuesta));
      }
    } catch (error) {
      console.error(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error === "Usuario no existe"
      ) {
        alertaMensaje(error.response.data.error, "Digite un usuario correcto");
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error === "Contraseña incorrecta"
      ) {
        alertaMensaje(
          error.response.data.error,
          "Digite una constraseña correcta"
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validarCampos}
      onSubmit={(values) => manejarEnvio(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          {loading ? (
            <Loading />
          ) : (
            <View style={estilos.contenedor}>
              <ScrollView contentContainerStyle={estilos.scrollView}>
                <Image source={imagenes.app} style={estilos.logoLogin} />
                <Text style={estilos.textoTitulo}>Iniciar Sesión</Text>
                <Etiqueta nombre={"Usuario: "} />
                <CajasTexto
                  label={"Usuario"}
                  icon={
                    <FontAwesome
                      name="user-o"
                      size={25}
                      color={
                        scheme === "dark"
                          ? colores.secundarioOscuro
                          : colores.secundarioClaro
                      }
                      style={{ marginRight: 10 }}
                    />
                  }
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  keyboardType="email-address"
                  errors={errors.username}
                />
                <View style={estilos.separador} />
                <Etiqueta nombre={"Contraseña: "} />
                <CajasTexto
                  label={"Contraseña"}
                  icon={
                    <Feather
                      name="lock"
                      size={25}
                      color={
                        scheme === "dark"
                          ? colores.secundarioOscuro
                          : colores.secundarioClaro
                      }
                      style={{ marginRight: 10 }}
                    />
                  }
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  inputType="password"
                  errors={errors.password}
                  // fieldButtonLabel={"Forgot?"}
                  // fieldButtonFunction={() => {}}
                />
                <View style={{ ...estilos.separador, marginTop: 10 }} />
                <BotonesDetalle
                  tipo={"grande"}
                  accion={() => {
                    handleSubmit();
                    setEjecutarAccion(true); // Activar la bandera después de llamar a handleSubmit
                  }}
                  nombre={"Iniciar Sesión"}
                />
                <ModalSucursales
                  abrirModal={abrirModal}
                  modalSucCerrada={cerrarModalSuc}
                  infoUsuario={infoUsuario}
                />
              </ScrollView>
            </View>
          )}
        </>
      )}
    </Formik>
  );
}
export default Login;
