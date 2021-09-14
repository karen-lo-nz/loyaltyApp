import React from 'react'
import { connect } from 'react-redux'

const UserTile = ({ shop }) => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-8 dark-background rounded text-center offset-2">
          <h4 className='light-text'>{shop.name}</h4>
        </div>
      </div>
      <hr />
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
