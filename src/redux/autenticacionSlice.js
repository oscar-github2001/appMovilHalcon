import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  id: null,
  lastName: null,
  roles: null,
  token: null,
  username: null,
  sucursales: null
};

export const autenticacionSlice = createSlice({
  name: "seguridad",
  initialState,
  reducers: {
    iniciarAutenticacion: (state, action) => {
      const { firstName, id, lastName, roles, token, username, sucursales } =
        action.payload;
      state.firstName = firstName ? firstName : state.firstName;
      state.id = id ? id : state.id;
      state.lastName = lastName ? lastName : state.lastName;
      state.roles = roles ? roles : state.roles;
      state.token = token ? token : state.token;
      state.username = username ? username : state.username;
      state.sucursales = sucursales ? sucursales : state.sucursales;
    },
    reiniciarAutenticacion: (state, action) => {
      state.firstName = action.payload;
      state.id = action.payload;
      state.lastName = action.payload;
      state.roles = action.payload;
      state.token = action.payload;
      state.username = action.payload;
      state.sucursales = action.payload;
    }
  }
});

export const {
  iniciarAutenticacion,
  reiniciarAutenticacion
} = autenticacionSlice.actions;
export default autenticacionSlice.reducer;
