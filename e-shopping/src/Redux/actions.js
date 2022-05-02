// use axios for api call
import axios from "axios";
import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  SORT_DATA,
  FILTER_DATA,
} from "./actionTypes";

const getDataRequest = () => ({
  type: GET_DATA_REQUEST,
});
const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

const getProductsData = () => async (dispatch) => {
  dispatch(getDataRequest());
  try {
    let res = await axios.get(
      "https://movie-fake-server.herokuapp.com/products"
    );
    let data = await res.data;
    dispatch(getProductsData(data));
  } catch (err) {
    dispatch(getDataFailure());
  }
};

const sortProducts = () => {};

const filterProducts = () => {};

export {
  getProductsData,
  sortProducts,
  filterProducts,
  getDataFailure,
  getDataRequest,
};
