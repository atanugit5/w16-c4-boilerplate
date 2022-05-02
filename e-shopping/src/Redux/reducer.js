export const SORT_DATA = "SORT_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        filterData: [],
        products: [],
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
        filterData: [],
        products: [],
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        filterData: [],
        products: [],
      };
  }
};
export { reducer };
