import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idProd: null,
  producto: null,
  bodegas: null,
  codigo: null
};
export const inventarioSlice = createSlice({
  name: "inventario",
  initialState,
  reducers: {
    iniciarInventario: (state, action) => {
      const { idProd, producto, bodegas, codigo } = action.payload;
      state.idProd = idProd
        ? idProd
        : state.idProd;
      state.producto = producto ? producto : state.producto;
      state.bodegas = bodegas ? bodegas : state.bodegas;
      state.codigo = codigo ? codigo : state.codigo;
    },
    cambiarInventario: (state, action) => {
      state.idProd = action.payload;
      state.producto = action.payload;
      state.bodegas = action.payload;
      state.codigo = action.payload;
    }
  },
});
export const { iniciarInventario, cambiarInventario } = inventarioSlice.actions;
export default inventarioSlice.reducer;
