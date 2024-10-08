"use client"
import React, { useEffect, useState } from 'react';
import "./admin.css"
import "../sign-in/page"
import "../product/page"
import { User } from '../interface/user';
import { addUser, getAllUser, searchUser, statusUser } from '../store/user/userStore';


import { Navigate, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

export default function Admin() {
  const [admin, setAdmin] = useState<any>([])
  const router = useRouter();

  useEffect(() => {
    const adminData = localStorage.getItem("admin");
    if (!adminData) {
      router.push("/sign-in");
    } else {
      setAdmin(JSON.parse(adminData))
    }
  }, [router])
  // đăng xuất
  const handleClick = () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout) {
      router.push("/sign-in");
      localStorage.removeItem("admin");
      setAdmin(null)
    }
  }
  // lấy user
  const users = useSelector((state: any) => state.userStore.user);
  console.log(users)
  const [selectedId, setselectedId] = useState<number | null>(null)
  const route = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  // hàm tìm kiêm
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (!searchValue) {
      setFilteredUsers(users);
    } else {
      const result = await dispatch(searchUser(searchValue));
      setFilteredUsers(result.payload);
    }
  };
  // hàm khóa user
  const handleBlock = (id: number) => {
    setselectedId(id)
    dispatch(statusUser({ id, status: 1 }))
    dispatch(getAllUser())
    setselectedId(null)
  }
  // hàm mở khóa user
  const handleUnBlock = (id: number) => {
    setselectedId(id)
    dispatch(statusUser({ id, status: 0 }))
    dispatch(getAllUser())
    setselectedId(null)

  }
  // // hàm thêm user
  const [getValueInputEmail, setGetvalueInputEmail] = useState<string>("")
  const [getValueInputName, setGetvalueInputName] = useState<string>("")
  const [getValueInputPassword, setGetvalueInputPassword] = useState<string>("")

  const handleGetvalueEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetvalueInputEmail(e.target.value)
  }

  const handleGetvalueName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetvalueInputName(e.target.value)
  }

  const handleGetvaluePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetvalueInputPassword(e.target.value)
  }


  const [isOpen, setIsOpen] = useState(false);
  const handleAddUser = () => {
    const newUser = {
      email: getValueInputEmail,
      name: getValueInputName,
      password: getValueInputPassword,

    }
    dispatch(addUser(newUser))
    useEffect(() => {
      dispatch(getAllUser());
    }, [dispatch]);


  }
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">Trung tâm quản lí</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="/admin">
              <i className="bx bxs-dashboard" />
              <p className="text">Người dùng</p>
            </a>
          </li>
          <li>
            <a href="/shop">
              <i className="bx bxs-shopping-bag-alt" />
              <p className="text">Cửa hàng</p>
            </a>
          </li>
          <li>
            <a href="/product">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Danh mục </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots" />
              <span className="text">Tin nhắn</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group" />
              <span className="text">Đội</span>
            </a>
          </li>
        </ul>

        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog" />
              <span className="text">Cài đặt</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" >
              <i className="bx bxs-log-out-circle" />
              <span onClick={handleClick} className="text">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">Loại</a>
          <form action="#">
            <div className="form-input">
              <input type="text" placeholder="Tìm kiếm..." onChange={handleSearch} value={search} />
              <button type="submit" className="search-btn" style={{ margin: 0 }}>
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <span className="material-symbols-outlined">person</span>
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Người dùng</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Quản lí người dùng</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                </li>
                <li>
                  <a className="active" href="#">Trang chủ</a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download" />
              <span className="text">Tải về</span>
            </a>
          </div>
          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check" />
              <span className="text">
                <h3>1020</h3>
                <p>Đơn hàng mới</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group" />
              <span className="text">
                <h3>2834</h3>
                <p>Truy cập</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle" />
              <span className="text">
                <h3>$2543</h3>
                <p>Tổng doanh thu</p>
              </span>
            </li>
          </ul>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Bảng Điều Khiển</h3>
                <p className='border border-white bg-red-600 text-white w-[100px] rounded text-center' onClick={() => setIsOpen(true)}>Thêm User</p>
                <i className="bx bx-filter" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((item: User) => (
                    <tr key={item.id} style={{ opacity: item.status === 1 ? 0.5 : 1 }}>
                      <td style={{ marginTop: "50%", marginBottom: "20px" }}>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        {
                          item.status === 1 ? <button onClick={() => handleUnBlock(item.id)}>Mở khóa</button> : <button onClick={() => handleBlock(item.id)}>Khóa</button>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {isOpen && <div className='overley  p-60  '>
        <div className='Adminnn  ' style={{ display: "flex", alignItems: "center", height: "50px", marginTop: "-200px", padding: "90px", justifyContent: "center", }}>
          <div className='border bg-pink-300 p-10 '>
            <h2 className='font-bold text-2xl'>Thêm User</h2>
            <br />
            <b>Email: </b>
            <input className='border border-white rounded bg-pink-100' onChange={handleGetvalueEmail} type="text" name="email" id="" placeholder='email' />
            <br />
            <br />
            <b>Tên:</b>
            <input className='border border-white rounded bg-pink-100' onChange={handleGetvalueName} type="text" name="name" id="" placeholder="tên" />
            <br />
            <br />
            <b>Password:</b>
            <input className='border border-white rounded bg-pink-100' onChange={handleGetvaluePassword} type="password" name="password" id="" placeholder="mật khẩu" />
            <br />
            <br />

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className='border border-white bg-pink-500 w-[100px] rounded' onClick={handleAddUser} >Thêm</button>
              <button className='border border-white bg-pink-500 w-[100px] rounded' onClick={() => setIsOpen(false)}>Đóng</button>
            </div>

          </div>

        </div>
      </div>}
      {/* CONTENT */}
    </>
  );
}
