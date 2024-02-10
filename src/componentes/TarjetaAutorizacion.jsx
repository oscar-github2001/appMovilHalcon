import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  ScrollView,
  Text,
  useColorScheme,
} from "react-native";
import { crearEstilos } from "../estilos/TarjetaAutorizacion.style.js";
import BotonesDetalle from "./BotonesDetalle.jsx";
import colores from "../constantes/colores.js";
function TarjetaAutorizacion({ doc, AutorizarSalidas }) {
  const { navigate } = useNavigation();
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.titulo}>
        <Text style={estilos.textoTituloPrincipal}>
          Documento N° {doc.noDoc}
        </Text>
        <Text style={estilos.textoTituloSecundario}>{doc.empresa}</Text>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <View style={estilos.contenido}>
          <View style={estilos.texto}>
            <Text style={estilos.textPrincipal}>Fecha: </Text>
            <Text style={estilos.textSecundario}>{doc.fecha}</Text>
          </View>
          <View style={estilos.texto}>
            <Text style={estilos.textPrincipal}>Sucursal: </Text>
            <Text style={estilos.textSecundario}>{doc.sucursal}</Text>
          </View>
          <View style={estilos.texto}>
            <Text style={estilos.textPrincipal}>Usuario: </Text>
            <Text style={estilos.textSecundario}>{doc.usuario}</Text>
          </View>
          <View style={estilos.texto}>
            <Text style={estilos.textPrincipal}>Total: </Text>
            <Text style={estilos.textSecundario}>{doc.total}</Text>
          </View>
          <View style={estilos.texto}>
            <Text style={estilos.textPrincipal}>Comentarios: </Text>
            <Text style={estilos.textSecundario}>{doc.comentarios}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={estilos.botones}>
        <View style={estilos.contenedorBoton}>
          <BotonesDetalle
            nombre={"Autorizar"}
            icon={
              <Ionicons
                name="checkmark-circle-sharp"
                size={22}
                color={colores.secundarioOscuro}
                style={{ alignSelf: "center" }}
              />
            }
            accion={() =>
              AutorizarSalidas(doc.noDoc, doc.idEmpresa, doc.idTipoDoc)
            }
          />
        </View>
        <View style={estilos.contenedorBoton}>
          <BotonesDetalle
            nombre={"Detalle"}
            icon={
              <Ionicons
                name="md-eye-sharp"
                size={22}
                color={colores.secundarioOscuro}
                style={{ alignSelf: "center" }}
              />
            }
            accion={() =>
              navigate("DocumentoDetalle", {
                doc: doc,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
export default TarjetaAutorizacion;
