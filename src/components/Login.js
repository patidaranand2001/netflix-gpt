import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignIN, setisSignIN]=useState(true);
const  handleonClick=()=>{
       setisSignIN(!isSignIN);
  };
  return (
    <div >
    <Header/>
    <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='netflix-bg'/>
    </div>

    <form className=' w-3/12  absolute bg-black  p-12 mx-auto  my-20 left-0 right-0   text-white bg-opacity-80 '>
    <h1 className='text-3xl font-bold my-4'>{isSignIN ? "Sign-In" : "Sign-Up"}</h1>
    
    {!isSignIN && 
      <input type='name' placeholder='Full Name '  className=' p-3 my-4 w-full bg-slate-600'/> 
      }
    <input type='email' placeholder='email '  className=' p-3 my-4 w-full bg-slate-600'/>
    <input type='password' placeholder='password'  className=' p-3 my-4 w-full bg-slate-600'/>
    <button className='p-3 my-6 w-full bg-red-500 rounded-lg'>{isSignIN ? "Sign-In" : "Sign-Up"}</button>
    <p className='cursor-pointer' onClick={handleonClick}>  {isSignIN? "New to netflix ? Sign-Up Here" : "Already a user Sign In "}</p>
        </form>
    </div>
  )
}

export default Login
