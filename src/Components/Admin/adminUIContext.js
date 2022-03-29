import React, { useContext, createContext, useReducer } from "react";
import { reducer } from "../../Redux/reducer";
import { actions, initialState } from "../../Redux/stateAndActions";
import axios from "axios";
import * as config from "../../Utils/config";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;
export const AdminUIContext = createContext();

export function useAdminUiContext() {
  return useContext(AdminUIContext);
}

export const AdminUIContextConsumer = AdminUIContext.Consumer;

export function AdminUIProvider({ children, AdminUIEvents }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state: state,
    addProducts: (products) => {
      dispatch({ type: actions.ADD_PRODUCTS, payload: products });
    },
    productsButtonClicked: () => {
      axios.get(`${config.BASE_URL}/products`);
    },
    getBrands: () => {
      axios
        .get(`${config.BASE_URL}/brand`)
        .then((resp) => {
          dispatch({ type: actions.ADD_BRANDS, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getStates: () => {
      axios
        .get(`${config.BASE_URL}/state`)
        .then((resp) => {
          dispatch({ type: actions.ADD_STATES, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProducts: (params) => {
      axios
        .get(`${config.BASE_URL}/products`, { params: params })
        .then((resp) => {
          dispatch({ type: actions.ADD_PRODUCTS, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createProduct: (params, getProducts) => {
      axios
        .post(`${config.BASE_URL}/products`, { ...params })
        .then((resp) => {
          getProducts();
          // dispatch({ type: actions.ADD_STATES, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProduct: (params, id, getProducts) => {
      axios
        .patch(`${config.BASE_URL}/products/${id}`, { ...params })
        .then((resp) => {
          getProducts();
          // dispatch({ type: actions.ADD_STATES, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteProduct: (id, getProducts) => {
      axios
        .delete(`${config.BASE_URL}/products/${id}`)
        .then((resp) => {
          getProducts();
          // dispatch({ type: actions.ADD_STATES, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //crops
    getCrops: (params) => {
      axios
        .get(`${config.BASE_URL}/crop`, { params: params })
        .then((resp) => {
          dispatch({ type: actions.ADD_CROPS, payload: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createCrops: (params, getCrops) => {
      axios
        .post(`${config.BASE_URL}/crop`, { ...params })
        .then((resp) => {
          getCrops();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCrops: (params, id, getCrops) => {
      axios
        .patch(`${config.BASE_URL}/crop/${id}`, { ...params })
        .then((resp) => {
          getCrops();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCrops: (id, getCrops) => {
      axios
        .delete(`${config.BASE_URL}/crops/${id}`)
        .then((resp) => {
          getCrops();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
  return (
    <AdminUIContext.Provider value={values}>{children}</AdminUIContext.Provider>
  );
}
