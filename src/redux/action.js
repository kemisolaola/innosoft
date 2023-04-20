export const SET_PRODUCT = 'SET_PRODUCT';

export function setProduct(product) {
  return { type: SET_PRODUCT, payload: product };
}