import { actionTypes } from "../constants";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: {
      id: new Date().getTime().toString(),
      data: products,
    },
  };
};

// export const selectedProducts = (product) => {
//   return {
//     type: actionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };

export const removeSelectedProduct = (index) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
    payload: { index: index },
  };
};

export const updateSelectedProducts = (product) => {
  return {
    type: actionTypes.UPDATE_SELECTED_PRODUCT,
    payload: product,
  };
};
