import React from 'react'
import { UserAuth } from '../context/AuthContext'

export const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async() => {
  try {
    await logout();
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div className='navbar bg-neutral text-neutral-content'>
        <div className="containerWrap flex justify-between">
            <button className="btn btn-ghost text-xl">instanChat</button>
           {currentUser ?
           <button onClick={handleLogout}> Logout </button>
           : ''
          }
        </div>
   </div>
  )
}
