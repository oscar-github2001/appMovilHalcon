import hacerPeticion from "./api.js";
import { formatearFecha, formaterNumero } from "../utiles/formatearCampos.js";

async function obtenerDocumentosSalida() {
  try {
    const respuesta = await hacerPeticion("get", "Documents/getDocuments");
    return respuesta.map((elemento) => ({
      ...elemento,
      total: formaterNumero(elemento.total),
      fecha: formatearFecha(elemento.fecha),
    }));
  } catch (error) {
    throw error;
  }
}

async function detalleDocumentoSalida(datos) {
  try {
    const respuesta = await hacerPeticion(
      "post",
      "Documents/getDocumentDetail",
      datos
    );
    return respuesta.map((elemento) => ({
      ...elemento,
      importe: formaterNumero(elemento.importe),
      costo: formaterNumero(elemento.costo),
    }));
  } catch (error) {
    throw error;
  }
}

async function aplicarDocumentoSalida(datos) {
  try {
    const respuesta = await hacerPeticion(
      "post",
      "Documents/ApplyDocument/",
      datos
    );
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function inicioSesionOK(datos) {
  try {
    const respuesta = await hacerPeticion("post", "Users/Login", datos);
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function cerrarSesionSistema() {
  try {
    const respuesta = await hacerPeticion("post", "Users/Logout");
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function obtenerInventario(datos) {
  try {
    const respuesta = await hacerPeticion("post", "Inventary/GetInventary", datos);
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function obtenerListaProductos(datos) {
  try {
    const respuesta = await hacerPeticion("post", "Inventary/ListProduct", datos);
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function asignarCodigoBarra(datos){
  try {
    const respuesta = await hacerPeticion("post", "Inventary/AsignarCodigoBarraProducto", datos);
    return respuesta;
  } catch (error) {
    throw error;
  }
}
export {
  obtenerDocumentosSalida,
  detalleDocumentoSalida,
  aplicarDocumentoSalida,
  inicioSesionOK,
  cerrarSesionSistema,
  obtenerInventario,
  obtenerListaProductos,
  asignarCodigoBarra
};
