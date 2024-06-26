import React, { useState, useRef } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Login() {
  const navigate=useNavigate();
   const dispatch=useDispatch();
  const [isSignIN, setisSignIN] = useState(true);
  const [errorMsg, setErrormsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();


  const handleonClick = () => {

    const Errormsg = validate(email.current.value, password.current.value);
    //  console.log(Errormsg);
    //  console.log(email.current.value);
    //  console.log(password.current.value);
    setErrormsg(Errormsg);
    if (Errormsg) return;
    if (!isSignIN) {
      //sign up logic 

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user)
        

          updateProfile(user, {
            displayName: name.current.value ,
             photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {

            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser (
              {uid:uid ,
                email:email,
                displayName:displayName}
              ))
            navigate("/Browse")
          })
          
          // ...
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // ..
          setErrormsg(errorCode + "-" + errorMessage)
        });
    }
    else {
      
signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/Browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode + "-" + errorMessage)
    navigate("/");
  });
    }



  }
  const handelSignIN = () => {
    setisSignIN(!isSignIN);
  };
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='netflix-bg' />
      </div>

      <form className=' w-3/12  absolute bg-black  p-12 mx-auto  my-20 left-0 right-0   text-white bg-opacity-80 
  '   onSubmit={(e) => {
          e.preventDefault();
        }}>
        <h1 className='text-3xl font-bold my-4'>{isSignIN ? "Sign-In" : "Sign-Up"}</h1>

        {!isSignIN &&
          <input
            ref={name}
            type='name' placeholder='Full Name ' className=' p-3 my-4 w-full bg-slate-600' />}
        <input
          ref={email}
          type='email' placeholder='email '
          className=' p-3 my-4 w-full bg-slate-600' />
        <input
          ref={password}
          type='password' placeholder='password' className=' p-3 my-4 w-full bg-slate-600' />

        <p className='text-red-500 font-bold text-lg' >{errorMsg}</p>
        <button className='p-3 my-6 w-full bg-red-500 rounded-lg' onClick={handleonClick}>{isSignIN ? "Sign-In" : "Sign-Up"}</button>
        <p className='cursor-pointer' onClick={handelSignIN}>  {isSignIN ? "New to netflix ? Sign-Up Here" : "Already a user Sign In "}</p>
      </form>
    </div>
  )
}

export default Login
