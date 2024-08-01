import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = ({user,logout}) => {
  return (
    <UserContainer user={user} logout={logout}/>
  )
}

export default NavLinks