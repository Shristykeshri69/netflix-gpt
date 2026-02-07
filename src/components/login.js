import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

      return (
   <div>
 
 <Header />
   <div className="absolute ">   
     <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
        alt="background logo"/>
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 rounded-lg text-white flex flex-col">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>

    <input 
    type="text" 
    placeholder="Email Address"
     className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
     />

     {!isSignIn &&  (
        <input 
        type="text"
        placeholder="Username"
        className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
        />
     )  }

    <input 
    type="password" 
    placeholder="Password" 
    className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
    />
    <button className="bg-red-700  p-4 my-6 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>

   <p className="py-4 cursor-pointer"onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}</p>
    </form>



   
  
   </div>
    

  )
}

export default Login