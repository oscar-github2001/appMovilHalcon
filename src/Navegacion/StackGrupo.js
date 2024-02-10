import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import Login from "../pantallas/Login.jsx";
import DocumentoDetalle from "../pantallas/DocumentoDetalle.jsx";
import colores from "../constantes/colores.js";
import DrawerGrupo from "./DrawerGrupo.js";
import EscanearInventario from "../pantallas/EscanearInventario.jsx";
import ListaProductos from "../pantallas/ListaProductos.jsx";
const Stack = createNativeStackNavigator();
function StackGrupo() {
  const scheme = useColorScheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AutorizacionSecundaria"
        component={DrawerGrupo}
      />
      <Stack.Screen
        name="DocumentoDetalle"
        component={DocumentoDetalle}
        options={{
          presentation: "modal",
          headerTitleStyle: {
            color:
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro,
            fontFamily: "quicksand-bold",
          },
        }}
      />
      <Stack.Screen
        name="EscanearProducto"
        component={EscanearInventario}
        options={{
          presentation: "modal",
          headerTitleStyle: {
            color:
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro,
            fontFamily: "quicksand-bold",
          },
          headerTitle: "Escaneando Producto",
        }}
      />
      <Stack.Screen
        name="ListaProductos"
        component={ListaProductos}
        options={{
          presentation: "modal",
          headerTitleStyle: {
            color:
              scheme === "dark"
                ? colores.secundarioOscuro
                : colores.secundarioClaro,
            fontFamily: "quicksand-bold",
          },
          headerTitle: "Filtrar Productos",
        }}
      />
      {/* <Stack.Screen options={{ headerShown: false }} name="FormularioEscSecundario" component={TabGrupo} />
        <Stack.Screen options={{ headerShown: false }} name="Escanear" component={Escanear} /> */}
    </Stack.Navigator>
  );
}

function StackLogin() {
  return (
    <Stack.Navigator initialRouteName="InicioSesion">
      <Stack.Screen
        name="InicioSesion"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { StackGrupo, StackLogin };
