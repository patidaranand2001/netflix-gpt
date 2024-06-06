import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate=useNavigate();
  const handleSignout=()=>{
    
signOut(auth).then(() => {
navigate("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  return ( 
    <div className='absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44  '
       src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-0logo' />
      
      <div className='flex p-5'>
      <img className='w-10 h-10  z-20 '
       src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='netflix-0logo' />
       <button className='font-bold text-white'onClick={handleSignout} on>(sign out)</button>
       </div>

    </div>
  )
}  
