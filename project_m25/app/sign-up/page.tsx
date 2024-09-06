"use client"
import React, { useState } from 'react'
import "../sign-in/page"
export default function page() {
  // validate
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    password: ""
  })

  const [error, setError] = useState({
    email: "",
    name: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true
    if (!inputValue.email) {
      error.email = "Email không được để trống";
      valid = false;
    } else {
      error.email = "";
    }
    if (!inputValue.name) {
      error.name = "Tên không được để trống";
      valid = false;
    } else {
      error.name = "";
    }

    if (!inputValue.password) {
      error.password = "Mật khẩu không được để trống";
      valid = false;
    } else {
      error.password = "";
    }

    // if (valid) {
    //   if (inputValue.email === admin.email && inputValue.password === admin.password) {
    //     navigate("/admin")
    //   } else {
    //     error.password = "Tài khoản hoặc mật khẩu không đúng"
    //     valid = false
    //   }
    // }

    setError({ ...error })
  }
  return (
    <div className="flex justify-center my-11">

    <div onSubmit={handleSubmit} className="">
      <div className='border border-black rounded h-auto w-[350px] p-7  border-8 border-transparent bg-gradient-to-r from-pink-300 z-[-9] p-[12px]'>
        <h2 className='font-bold text-lg m-6 '>Đăng kí tài khoản của bạn</h2>
        <p className='text-sm ml-5 mb-4'>Welcome back! Please sign in to continue</p>
        <div className='flex gap-[30%] '>
          <div className='border border-black rounded w-[100px] text-center'><i className="fa-brands fa-google"></i>Google</div>
          <div className='border border-black rounded w-[100px] text-center'><i className="fa-brands fa-facebook"></i>Facebook</div>
        </div>
        <b>_____________________or_____________________</b>
        <br />
        <b>Email</b>
        <br />
        <input className=' rounded w-[300px] text-center' type="text" name="email" id="" placeholder='email' />
        {
          error.email && <span style={{ color: "red", fontSize: 14 }}>{error.email}</span>
        }
        <br />
        <b>Tên</b>
        <br />
        <input className=' rounded w-[300px] text-center' type="text" name="name" id="" placeholder='tên' />
        {
          error.name && <span style={{ color: "red", fontSize: 14 }}>{error.name}</span>
        }
        <br />
        <b>Mật khẩu</b>
        <br />
        <input className=' rounded w-[300px] text-center' type="password" name="password" id="" placeholder='mật khẩu' />
        {
          error.password && <span style={{ color: "red", fontSize: 14 }}>{error.password}</span>
        }
        <br />
        <br />
        <a href="/sign-in"> <button className=' text-white border border-w rounded  w-[300px] text-center bg-pink-500' type='submit' onClick={handleSubmit}>Đăng kí 🎉</button>      </a>
        <br />
        <br />
        <div>
          <a href='/sign-in' className='m-11 text-white'>đã có tài khoản? Đăng nhập!</a> <br />
          _____________________________________________

          <b></b>
        </div>

      </div>
    </div>
    </div>
  )
}
