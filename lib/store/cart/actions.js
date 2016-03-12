import * as types from './mutation-types'

export const addToCart = ({ dispatch }, product) => {
  dispatch(types.ADD_TO_CART, product.id)
}

export const remove = ({ dispatch }, product) => {
  dispatch(types.CART_REMOVE, product.id)
}
