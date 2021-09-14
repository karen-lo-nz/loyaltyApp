import { SET_SHOPS, ADD_SHOP, UPDATE_SHOP, DELETE_SHOP } from '../actions/shops'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_SHOPS:
      return action.shops
    case ADD_SHOP:
      return [...state, action.shop]
    case DELETE_SHOP:
      return state.filter(shop => shop.id !== action.id)
    case UPDATE_SHOP:
      return state.map(shop => {
        if (shop.id === action.id) {
          return action.shop
        }
        return shop
      })
    default:
      return state
  }
}

export default reducer
