import { createSlice } from "@reduxjs/toolkit";

const localTocken = localStorage.getItem('token');
const initialState = {
  token : localTocken || "",
  userIsLoggedIn : !!localTocken,
}

const authSlice = createSlice({
  name : "Authentication",
  initialState,
  reducers : {
    login (state , action){
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.userIsLoggedIn = true;
    },
    logout ( state , action){
      state.token  = null;
      state.userIsLoggedIn = false;
      localStorage.removeItem('token');
    },
    signup (){},
  }
});


export const authAction = authSlice.actions;
export default authSlice.reducer;
