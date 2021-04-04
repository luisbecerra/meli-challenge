export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCart: addToCart(state, action)
      }
    case 'REMOVE_TO_CART':
      return {
        ...state,
        shoppingCart: [...state.shoppingCart.filter((sc) => sc.id !== action.product.id)]
      }
    default:
      return state
  }
}

const addToCart = (state, action) => {
  const productIndex = state.shoppingCart.findIndex((sc) => sc.id === action.product.id)

  if(productIndex !== -1) {
    state.shoppingCart[productIndex].times++
    return state.shoppingCart;
  } else {
    action.product.times = 1;
    return [...state.shoppingCart, action.product];
  }
}