import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from "react-native";
import colores from "../constantes/colores";
import { crearEstilos } from "../estilos/CajasTexto.style";

export default function CajasTexto({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onBlur,
  onChangeText,
  value,
  editable,
  errors,
}) {
  const scheme = useColorScheme();
  const estilos = crearEstilos(scheme);
  return (
    <>
      <View style={estilos.contenedor}>
        {icon}
        {inputType == "password" ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            style={estilos.cajaTexto}
            secureTextEntry={true}
            selectionColor={
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro
            }
            placeholderTextColor={
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro
            }
          />
        ) : inputType == "comentarios" ? (
          <TextInput
            value={value}
            style={estilos.cajaTexto}
            editable={editable}
            multiline
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            style={estilos.cajaTexto}
            selectionColor={
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro
            }
            placeholderTextColor={
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro
            }
            editable={editable}
          />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
            {fieldButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
      {errors && <Text style={estilos.error}>{errors}</Text>}
    </>
  );
}
