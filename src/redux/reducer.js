    // reducers.js
import { UPDATE_PRODUCT } from './actions';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      const { productId, updatedFields } = action.payload;
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === productId) {
            return {
              ...product,
              ...updatedFields,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
