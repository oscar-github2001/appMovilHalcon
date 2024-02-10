import React, { useMemo } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { TAMANIOS } from "../constantes/tema.js";
import Autorizacion from "../pantallas/Autorizacion.jsx";
import Inicio from "../pantallas/Inicio.jsx";
import Perfil from "../pantallas/Perfil.jsx";
import BarraEncabezado from "../componentes/BarraEncabezado.jsx";
import colores from "../constantes/colores.js";
import MenuDrawer from "../componentes/MenuDrawer.jsx";
import Inventario from "../pantallas/Inventario.jsx";

const Drawer = createDrawerNavigator();
const DrawerGrupo = () => {
  const { roles } = useSelector((state) => state.seguridad);
  const arregloRoles = useMemo(
    () => (roles ? roles.map((elemento) => elemento.idRol) : []),
    [roles]
  );

  const scheme = useColorScheme();
  const drawerIcon = useMemo(
    () => (focused, size, routeName) => {
      let iconName;
      if (routeName === "Inicio") {
        iconName = focused ? "home" : "md-home-outline";
      } else if (routeName === "Autorizacion") {
        iconName = focused ? "document-sharp" : "document-outline";
      } else if (routeName === "Perfil") {
        iconName = focused ? "settings" : "settings-outline";
      } else if (routeName === "Inventario") {
        iconName = focused ? "camera" : "camera-outline";
      }
      return (
        <Ionicons
          name={iconName}
          color={
            focused
              ? colores.primarioClaro
              : !focused
              ? scheme === "dark"
                ? colores.primarioClaro
                : colores.principalClaro
              : null
          }
          size={size}
        />
      );
    },
    [scheme]
  );

  const headerStyle = useMemo(
    () => ({
      backgroundColor:
        scheme === "dark" ? colores.terciarioOscuro : colores.principalClaro,
    }),
    [scheme]
  );

  const headerTitleStyle = useMemo(
    () => ({
      fontFamily: "quicksand-bold",
      fontSize: TAMANIOS.large,
      color:
        scheme === "dark" ? colores.secundarioOscuro : colores.secundarioOscuro,
    }),
    [scheme]
  );
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawer {...props} />}
      screenOptions={({ route }) => ({
        drawerActiveBackgroundColor:
          scheme === "dark" ? colores.principalOscuro : colores.principalClaro,
        drawerActiveTintColor: colores.secundarioOscuro,
        drawerInactiveTintColor:
          scheme === "dark"
            ? colores.secundarioOscuro
            : colores.secundarioClaro,
        drawerLabelStyle: {
          marginLeft: -5,
          fontFamily: "quicksand-semibold",
          fontSize: 15,
        },
        drawerIcon: ({ focused, size }) =>
          drawerIcon(focused, size, route.name),
        headerRight: () => <BarraEncabezado />,
        headerStyle: headerStyle,
        headerTitle: "EL HALCÓN",
        headerTitleStyle: headerTitleStyle,
        headerTintColor: colores.secundarioOscuro,
        drawerStyle: {
          width: 340,
        },
        drawerItemStyle: {
          //width: "100%",
          //marginLeft: 0,
          marginVertical: 0,
          borderRadius: 15,
        },
      })}
    >
      <Drawer.Screen name="Inicio" component={Inicio} />
      {arregloRoles.includes(1) || arregloRoles.includes(51) ? (
        <Drawer.Screen name="Autorizacion" component={Autorizacion} />
      ) : null}
      <Drawer.Screen name="Inventario" component={Inventario} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
};

export default DrawerGrupo;
