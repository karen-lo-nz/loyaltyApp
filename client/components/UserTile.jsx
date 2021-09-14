import React from 'react'
import { connect } from 'react-redux'

const UserTile = (props) => {
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
    users: globalState.users
  }
}

export default connect(mapStateToProps)(UserTile)
