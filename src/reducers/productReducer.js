import { actionTypes } from "../constants";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      const { id, data } = payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: id,
            ItemName: data.ItemName,
            Weight: data.Weight,
          },
        ],
      };

    case actionTypes.REMOVE_SELECTED_PRODUCT:
      const newProducts = state.products.filter(
        (ele, ind) => ind !== payload.index
      );

      return {
        ...state,
        products: newProducts,
      };

    case actionTypes.UPDATE_SELECTED_PRODUCT:
      let pId = payload.id;
      const { ItemName, Weight, weightType } = payload;

      const updateProductList = state.products.filter((ele) => {
        if (ele.id === pId) {
          ele.ItemName = ItemName;
          ele.Weight = Weight + " " + weightType;
          return ele;
        } else return ele;
      });

      return {
        ...state,
        products: updateProductList,
      };

    default:
      return state;
  }
};
