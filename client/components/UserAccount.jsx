import React, { useState } from 'react'

import UserTile from './UserTile'

import { connect } from 'react-redux'

import { returnShopsFromStamps } from '../utils'

const UserAccount = ({ users, stamps }) => {
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
        </div>
      </div>
      {userId// if userId has been set then render the following
        ? <>
          <div className="row">
            <div className="col-12 text-center">
              <h2>Welcome {users.find(user => user.id === userId).name}</h2>
              <p className='text-start'>Total number of Reseraunts visited - </p>
              <p className='text-start'>Total number of Stamps collected - {stamps.filter(s => s.user_id === userId).length}</p>
            </div>
          </div>
          {returnShopsFromStamps(stamps, userId).map(s => {
            return <p key={s}>{s}</p>
          })}
          <UserTile />
        </>
        : null
      }
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    users: globalState.users,
    stamps: globalState.stamps
  }
}

export default connect(mapStateToProps)(UserAccount)
