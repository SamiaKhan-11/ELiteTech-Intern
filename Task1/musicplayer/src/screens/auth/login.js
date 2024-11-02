import React from 'react'
import { loginEndpoint } from '../../spotify'


const Login = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-blue-200'>
      <div className='w-[100vw] h-[100vh] bg-black p-2 item-center content-center'>
        <div className='p-1 w-[5%] mx-auto'>
          <button className='p-1 w-20 m-5 h-10 bg-purple-300 text-xl font-bold text-white'>
            <a href={loginEndpoint}> 
            Login</a></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login