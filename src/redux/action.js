export const SET_PRODUCT = 'SET_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function setProduct(product) {
  return { type: SET_PRODUCT, payload: product };
}
export const updateProduct = (productId, updatedFields) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, updatedFields },
});