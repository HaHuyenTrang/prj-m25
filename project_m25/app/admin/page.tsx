"use client"
import React, { useEffect, useState } from 'react';
import "./admin.css"
import "../sign-in/page"
import { Navigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

export default function Admin() {
  
  const router = useRouter();
  const handleClick = () => {
    const confirmLogout = confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout){
      router.push("/sign-up");

    }
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
            <a href="/category">
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
              <span onClick={handleClick}  className="text">Đăng xuất</span>
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
              <input type="text" placeholder="Tìm kiếm..." />
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
                <i className="bx bx-search" />
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
                {/* <tbody>
                  {filteredUsers.map((item: Users) => (
                    <tr key={item.id} style={{ opacity: item.status === 1 ? 0.5 : 1 }}>
                      <td style={{ marginTop: "80%" }}>{item.id}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>
                        {
                          item.status === 1 ? <button onClick={() => handleUnBlock(item.id)}>Mở khóa</button> : <button onClick={() => handleBlock(item.id)}>Khóa</button>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}
