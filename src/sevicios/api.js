import axios from "axios";
import { store } from "../redux/store.js";
import { reiniciarAutenticacion } from "../redux/autenticacionSlice.js";
import { alertaMensaje } from "../utiles/alertas.js";
const API_BASE_URL = "https://api.elhalcon.com.ni:9097/api";

// Función genérica para realizar solicitudes
async function hacerPeticion(method, endpoint, datos = null) {
  const estadoActual = store.getState();
  const token = estadoActual.seguridad.token;
  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };
  
  try {
    const respuesta = await axios({
      method,
      url: `${API_BASE_URL}/${endpoint}`,
      headers,
      data: datos,
    });
    if (endpoint === "Users/Logout") {
      store.dispatch(reiniciarAutenticacion(null));
    }
    return respuesta.data;
  } catch (error) {
    console.error(
      `Error en la solicitud ${method.toUpperCase()} ${endpoint}:`,
      error
    );
    if (error && error.message === "Network Error") {
      alertaMensaje("Error de red", "Problemas al conectarse con el servidor");
      store.dispatch(reiniciarAutenticacion(null));
    }
    if (error && error.response && error.response.data && error.response.data.error === "No existe el código de barras en el catálogo de productos.") {
      throw error;
    }
    store.dispatch(reiniciarAutenticacion(null));
    throw error;


  }
}
export default hacerPeticion;
