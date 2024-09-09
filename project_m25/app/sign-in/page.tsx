"use client"
import React, { useState } from 'react'
import "../sign-up/page"
import { useRouter } from 'next/navigation'


export default function page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/sign-up");
  }

  // validate
  const [error, setError] = useState({
    email: "",
    name: "",
    password: ""
  })

  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    password: ""
  })

  const account = {
    name: "admin123",
    email: "admin123@gmail.com",
    password: "admin1234"
  }

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

    if (valid) {
      if (inputValue.name === account.name && inputValue.email === account.email && inputValue.password === account.password) {
        alert("Đăng nhập thành công");
        setTimeout(() => {
          router.push("/admin")
        }, 1000);
        localStorage.setItem("admin", JSON.stringify(account))

      } else {
        alert("Tài khoản hoặc mật khẩu không đúng")
      }
    }

    setError({ ...error })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  return (
    <div className="flex justify-center my-11">
      <div onSubmit={handleSubmit} >
        <div className=' border-black rounded h-auto w-[350px]  border-8 border-transparent bg-gradient-to-r from-pink-300 z-[-9] p-[12px]'>
          <h2 className='font-bold text-lg m-6 '>Đăng nhập tài khoản của bạn</h2>
          <p className='text-sm ml-5 mb-4'>Welcome back! Please sign in to continue</p>
          <div className='flex gap-[30%] '>
            <div className='border border-black rounded w-[100px] text-center'><i className="fa-brands fa-google"></i>Google</div>
            <div className='border border-black rounded w-[100px] text-center'><i className="fa-brands fa-facebook"></i>Facebook</div>
          </div>
          <b>_____________________or_____________________</b>
          <br />

          <b>Email</b>
          <br />
          <input className=' rounded w-[300px] text-center' type="text" name="email" id="" placeholder='email' required onChange={handleChange} />
          {
            error.email && <span style={{ color: "red", fontSize: 14 }}>{error.email}</span>
          }
          <br />
          <b>Tên</b>
          <br />
          <input className=' rounded w-[300px] text-center' type="text" name="name" id="" placeholder='tên' required onChange={handleChange} />
          {
            error.name && <span style={{ color: "red", fontSize: 14 }}>{error.name}</span>
          }
          <br />
          <b>Mật khẩu</b>
          <br />
          <input className=' rounded w-[300px] text-center' type="password" name="password" id="" placeholder='mật khẩu' required onChange={handleChange} />
          {
            error.password && <span style={{ color: "red", fontSize: 14 }}>{error.password}</span>
          }
          <br />
          <br />
          <button className=' text-white border border-w rounded  w-[300px] text-center bg-pink-500' onClick={handleSubmit} type='submit' >Đăng nhập 🎉</button>
          <br />
          <br />
          <div>
            <a className='m-11 text-white' href='/sign-up'>Chưa có tài khoản? Đăng kí</a>
            <br />
            {/* <a href="" onClick={handleClick}>Đăng kí</a> */}
            _____________________________________________
          </div>

        </div>
      </div>
    </div>
  )
}
