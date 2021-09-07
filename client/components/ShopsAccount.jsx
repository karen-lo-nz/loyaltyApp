import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getShops } from '../actions/shops'

const ShopAccount = (props) => {
  const shops = props.shops

  useEffect(() => {
    props.dispatch(getShops())
  }, [])
  const [shopName, setShopName] = useState('')

  const changeHandler = (e) => {
    setShopName(e.target.value)
  }

  const selectedShop = shops.find(shop => shop.name === shopName)

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Shop Account View</h1>
          <select name="shop_name" value={shopName} onChange={(e) => changeHandler(e)}>
            <option >Select Shop</option>
            {shops.map(shop => { return <option key={shop.id} value={shop.name}>{shop.name}</option> })}
          </select>
          {selectedShop
            ? <div>
              <h3>Shop Name: {selectedShop.name}</h3>
              <h3>Shop Address: {selectedShop.address}</h3>
              <h3>Contact: {selectedShop.email}</h3>
            </div>
            : <div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    shops: globalState.shops
  }
}

export default connect(mapStateToProps)(ShopAccount)
