import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import {StackGrupo, StackLogin} from "./StackGrupo.js";

/*function TabGrupo() {
  const { roles } = useSelector((state) => state.seguridad);
  const arregloRoles = roles ? roles.map((elemento) => elemento.rol) : [];
  const scheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: scheme === "dark" ? colores.terciarioOscuro : colores.principalClaro,
        },
        headerTitleStyle: {
          color: colores.secundarioOscuro,
          fontFamily: "playpenSans-bold",
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "md-home-outline";
          } else if (route.name === "Autorizacion") {
            iconName = focused ? "document-sharp" : "document-outline";
          } else if (route.name === "FormularioEsc") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Ionicons
              name={iconName}
              color={scheme === "dark" ? colores.principalOscuro : colores.principalClaro}
              size={size}
            />
          );
        },
        headerRight: () => <BarraEncabezado />,
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} options={{ title: "EL HALCÓN", headerShown: false }} />
      {(arregloRoles.includes("ALTAGERENCIA") || arregloRoles.includes("INFORMATICA")) ? (
        <Tab.Screen name="Autorizacion" component={Autorizacion} options={{ title: "EL HALCÓN", headerShown: false }} />
      ) : null}
      <Tab.Screen name="FormularioEsc" component={FormularioEsc} options={{ title: "EL HALCÓN", headerShown: false }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ title: "EL HALCÓN", headerShown: false }} />
    </Tab.Navigator>
  );
}*/

export default function Navegacion() {
  const scheme = useColorScheme();
  const { token } = useSelector((state) => state.seguridad);
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      {token ? (
        <StackGrupo />
      ) : (
       <StackLogin />
      )}
    </NavigationContainer>
  );
}