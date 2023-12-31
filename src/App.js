import './App.css';

import React, { useState } from "react";
import Product from "./Component/Product"

function App() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLoginClick = () => {
    if (userId === 'priya' && password === '1234') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className='flex flex-col m-8 items-center'>
      {isLoggedIn ? (
        <Product />
      ) : (
        <>
          <label>
            User-Id : 
            <input
              type='text'
              placeholder='User-Id'
              className='w-36 m-2 border-2 border-black p-1 rounded-xl'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
          <label>
            Password : 
            <input
              type='password'
              placeholder='Password'
              className='w-36 m-2 border-2 border-black p-1 rounded-xl'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className='border-2 border-blue-600 bg-red-800 p-2 rounded-xl w-24'
            onClick={handleLoginClick}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
