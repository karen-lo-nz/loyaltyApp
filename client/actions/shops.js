import { fetchShops, addShop, deleteShop, updateShop, fetchShopById } from '../apis/shops'

export const SET_SHOPS = 'SET_SHOPS'
export const SET_SHOP = 'SET_SHOP'
export const ADD_SHOP = 'ADD_SHOP'
export const UPDATE_SHOP = 'UPDATE_SHOP'
export const DELETE_SHOP = 'DELETE_SHOP'

// get all shops
const setShops = (shops) => {
  return {
    type: SET_SHOPS,
    shops
  }
}

// thunk
export const getShops = () => {
  return dispatch => {
    return fetchShops()
      .then(shops => {
        return dispatch(setShops(shops))
      })
  }
}

// get one shop
const setOneShop = (shop) => {
  return {
    type: SET_SHOP,
    shop
  }
}

// thunk

export const getOneShop = (id) => {
  return dispatch => {
    return fetchShopById(id)
      .then(shop => {
        return dispatch(setOneShop(shop))
      })
  }
}

// add shop
const addShopToStore = (shop) => {
  return {
    type: ADD_SHOP,
    shop
  }
}

// thunk
export const createShop = (shop) => {
  return dispatch => {
    return addShop(shop)
      .then(shop => {
        return dispatch(addShopToStore(shop))
      })
  }
}

// update shop
const updateShopInStore = (id, shop) => {
  return {
    type: UPDATE_SHOP,
    id,
    shop
  }
}

// thunk
export const updateShopAction = (shop) => {
  return dispatch => {
    return updateShop(shop.id, shop)
      .then(updatedShop => {
        return dispatch(updateShopInStore(updatedShop.id, updatedShop))
      })
  }
}

// delete shop
const deleteShopFromStore = (id) => {
  return {
    type: DELETE_SHOP,
    id
  }
}

// thunk
export const deleteShopAction = (id) => {
  return dispatch => {
    return deleteShop(id)
      .then(() => {
        return dispatch(deleteShopFromStore(id))
      })
  }
}
