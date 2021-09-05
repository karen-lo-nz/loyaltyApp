import React from 'react'
import { connect } from 'react-redux'

const UserAccount = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>User account view</h1>
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

export default connect(mapStateToProps)(UserAccount)
