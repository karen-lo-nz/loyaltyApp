import React from 'react'
import { connect } from 'react-redux'

const UserAccount = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>User View</h1>
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select User
            </button>
            <ul className="dropdown-menu">
            </ul>
          </div>
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
