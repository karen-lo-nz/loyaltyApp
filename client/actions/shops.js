import { fetchShops, addShop, deleteShop, updateShop, fetchShopById } from '../apis/shops'

export const SET_SHOPS = 'SET_SHOPS'
export const SET_SHOP = 'SET_SHOP'
export const ADD_SHOP = 'ADD_SHOP'
export const UPDATE_SHOP = 'UPDATE_SHOP'
export const DELETE_SHOP = 'DELETE_SHOP'

const setShops = (shops) => {
  return {
    type: SET_SHOPS,
    shops
  }
}

export const getShops = () => {
  return dispatch => {
    return fetchShops()
      .then(shops => {
        return dispatch(setShops(shops))
      })
  }
}

const setOneShop = (shop) => {
  return {
    type: SET_SHOP,
    shop
  }
}

export const getOneShop = (id) => {
  return dispatch => {
    return fetchShopById(id)
      .then(shop => {
        return dispatch(setOneShop(shop))
      })
  }
}

const addShopToStore = (shop) => {
  return {
    type: ADD_SHOP,
    shop
  }
}

export const createShop = (shop) => {
  return dispatch => {
    return addShop(shop)
      .then(shop => {
        return dispatch(addShopToStore(shop))
      })
  }
}

const updateShopInStore = (id, shop) => {
  return {
    type: UPDATE_SHOP,
    id,
    shop
  }
}

export const updateShopAction = (shop) => {
  return dispatch => {
    return updateShop(shop.id, shop)
      .then(updatedShop => {
        return dispatch(updateShopInStore(updatedShop.id, updatedShop))
      })
  }
}

const deleteShopFromStore = (id) => {
  return {
    type: DELETE_SHOP,
    id
  }
}

export const deleteShopAction = (id) => {
  return dispatch => {
    return deleteShop(id)
      .then(() => {
        return dispatch(deleteShopFromStore(id))
      })
  }
}
