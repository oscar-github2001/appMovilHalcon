import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store.js";
import Navegacion from "./src/navegacion/Navegacion.js";
import { useFonts } from "expo-font";
import fuentes from "./src/constantes/fuentes.js";
export default function App() {
  const [cargarFuentes] = useFonts(fuentes);
  if (!cargarFuentes) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navegacion />
    </Provider>
  );
}