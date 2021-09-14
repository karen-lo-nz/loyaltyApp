import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getStamps } from '../actions/stamps'

const StampStamps = (props) => {
  const stamps = props.stamps

  useEffect(() => {
    props.dispatch(getStamps())
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Stamps Table</h1>
          {stamps
            ? stamps.map(stamp => {
              return (
                <li key={stamp.id}>{stamp.shop_id}</li>
              )
            })
            : <div>
            </div>}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    stamps: globalState.stamps
  }
}

export default connect(mapStateToProps)(StampStamps)
