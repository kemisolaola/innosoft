import { createStore } from 'redux';

const initialState = {
  product: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, product: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;