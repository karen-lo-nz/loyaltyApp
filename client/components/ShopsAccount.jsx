import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getShops } from '../actions/shops'

const ShopAccount = (props) => {
  const shops = props.shops

  useEffect(() => {
    props.dispatch(getShops())
  }, [])
  console.log(shops)
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Shop Account View</h1>
          {shops
            ? shops.map(shop => {
              return (
                <li key={shop.id}>{shop.name}</li>
              )
            })
            : <div>
              <p>loading...</p>
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
