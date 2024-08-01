import React, { useState } from 'react'
import NavLinks from './NavLinks'


const Navbar = () => {
    const [user,setUser]=useState({name:'something'});
    const logout=(e)=>{

    }
  return (
    <NavLinks user={user} logout={logout}/>
  )
}

export default Navbar