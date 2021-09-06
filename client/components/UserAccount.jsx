import React, { useState } from 'react'

import { connect } from 'react-redux'

const UserAccount = ({ users }) => {
  const [userId, setUserId] = useState(null) // local state to identify individual user from store
  const handleClick = (id) => {
    setUserId(id)
  }
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
              {users.map(user => {
                return <li key={user.id} className='dropdown-item' onClick={() => handleClick(user.id)}>{user.name}</li>
              })}
            </ul>
          </div>
          {userId// if userId has been set then render the following
            ? <h2>Welcome {users.find(user => user.id === userId).name}</h2>
            : null
          }
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
