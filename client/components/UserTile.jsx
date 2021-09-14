import React from 'react'
import { connect } from 'react-redux'
import { getOneShop } from '../actions/shops'

const UserTile = ({ users, stamps }) => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-8 dark-background rounded text-center offset-2">
          <h4 className='light-text'>Resteraunt</h4>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    users: globalState.users,
    stamps: globalState.stamps
  }
}

export default connect(mapStateToProps)(UserTile)
