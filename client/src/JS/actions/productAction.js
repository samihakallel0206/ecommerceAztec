import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FAIL_PRODUCT,
  GET_MY_PRODUCT,
  GET_ONE_PRODUCT,
  GET_PRODUCTS,
  LOAD_PRODUCT,
} from "../actionTypes/productActionTypes";
import axios from "axios";

export const getAllProd = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const result = await axios.get("/api/product/allProd");
    dispatch({ type: GET_PRODUCTS, payload: result.data.listProd });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const addProduct = (newProd) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      authorisation: localStorage.getItem("token"),
    };
    const result = await axios.post("/api/product/addProd", newProd, config);
    dispatch({ type: ADD_PRODUCT, payload: result.data });
    dispatch(getAllProd());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const getOne = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const result = await axios.get(`/api/product/${id}`);
    dispatch({ type: GET_ONE_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const getMyProd = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      authorisation: localStorage.getItem("token"),
    };
    const result = await axios.get("/api/product/myProd", config);
    dispatch({ type: GET_MY_PRODUCT, payload: result.data });
    dispatch(getAllProd());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const editProduct = (id, editProd) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      authorisation: localStorage.getItem("token"),
    };
    const result = await axios.put(`/api/product/${id}`, editProd, config);
    dispatch({ type: EDIT_PRODUCT, payload: result.data });
    dispatch(getOne(id));
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};

export const delProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const config = {
      authorisation: localStorage.getItem("token"),
    };
    const result = await axios.delete(`/api/product/${id}`, config);
    dispatch({ type: DELETE_PRODUCT, payload: result.data });
    dispatch(getOne(id));
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error });
  }
};
