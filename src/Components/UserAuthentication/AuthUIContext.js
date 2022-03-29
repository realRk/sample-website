import React, { useContext, createContext, useReducer } from "react";
import { reducer } from "../../Redux/reducer";
import { actions, initialState } from "../../Redux/stateAndActions";
import axios from "axios";
import * as config from "../../Utils/config";

// axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLmFkbWluQGdtYWlsLmNvbSIsImlkIjoiZGRhNmI0MWQtMmFhOC00ZGVlLWIwZDctOGQzNDFlYzRlNTU5Iiwicm9sZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjQ4NDU3OTA3fQ.zpqjEYhkQDiRZSEl-tuUv_jBgnhH8VXv0LQLnf1ZmWE`
export const AuthUIContext = createContext();

export function useAuthUiContext() {
  return useContext(AuthUIContext);
}

export const AdminUIContextConsumer = AuthUIContext.Consumer;

export function AuthUIProvider({ children, authUIEvents }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state: state,
    userSignIn:(params)=>{
      axios.post(`${config.BASE_URL}/auth/login`,{...params}).then((resp) => {
        dispatch({ type: actions.USER_LOGIN, payload: resp.data });
      });
    }
  };
  return (
    <AuthUIContext.Provider value={values}>{children}</AuthUIContext.Provider>
  );
}
