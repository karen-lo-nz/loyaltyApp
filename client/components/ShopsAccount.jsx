import React from 'react'
import { connect } from 'react-redux'

const ShopAccount = (props) => {
  const shops = props.shops
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Shop Account View</h1>
          {shops
            ? shops.map(shop => {
              return (
                <h1 key={shop.id}>{shop.name}</h1>
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
