"use client"
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../login-user/page'
import "../detail/[id]/page"
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addCarts, getAllProduct } from '../store/product/productStore';
import { getAllUser } from '../store/user/userStore';
// import 'swiper/swiper-bundle.min.css';
export default function page() {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem("account") || "null"));
    const cupcake: any = useSelector(((state: any) => state.productStore.list));
    //   const cart = useSelector((state: any) => state.productReducer.cart);
    const users = useSelector((state: any) => state.userStore.user)
    const route = useRouter();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllProduct());
        // Lấy giỏ hàng từ localStorage và set vào Redux state
        // dispatch(setCart(account.cart));
        dispatch(getAllUser())
    }, [dispatch]);

    const handleDetail = (id: number) => {
        console.log(id);
        route.push(`/detail/${id}`);
    };

    const handleLogout = () => {
        const confirmLogOut = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
        if (confirmLogOut) {
            localStorage.removeItem("account");
            route.push("/login-user");
            setAccount(null);
        }
    };

    const handleAddToCart = (productId: number) => {
        if (account) {
            const findUser = users.find((user: any) => user.id === account.id);
            if (findUser) {
                if (findUser.status === 1) {
                    alert("tài khoản đã bị chặn")
                } else {
                    dispatch(addCarts(productId));
                    alert("Thêm sản phẩm vào giỏ hàng thành công!");
                }
            }

        } else {
            // Xử lý khi người dùng chưa đăng nhập
            alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
            // navigate("/login");
        }
    };
    const hadleMall = () => {
        route.push("/cupcakeMall")
    }
    const hadleBig = () => {
        route.push("/cupcakeBig")
    }
    const hadleNew = () => {
        route.push("/cupcakeNew")
    }
    const hadleLogin = () => {
        route.push("/login-user")
    }

    return (
        <div className='bg-red-400 w-auto h-auto'>
            <div className='bg-yellow-50 ' >
                <div className='flex gap-[800px] justify-center p-5' >
                    <h1 className='text-3xl font-bold text-red-800'><i className="fa-solid fa-cake-candles text-3xl text-red-800  "></i> Tiệm bánh ngọt</h1>
                    <h1 className='text-3xl  text-red-600 '>
                        <i className="fa-brands fa-facebook "></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </h1>

                </div>
                {
                    account ? <>

                        <p className='ml-[800px] ' >

                            <div className='text-sm flex items-center gap-5 '>
                                {isOpen &&
                                    <div className='border-2 border-red-800 bg-yellow-50 rounded w-[300px] p-3'>
                                        <h1 className='font-bold text-red-800 text-[15px]'><i className="fa-solid fa-circle-user "></i>THÔNG TIN CỦA BẠN</h1>
                                       <span> <b className='text-red-400'>Tên: </b> {account.name}</span>
                                       <br />
                                       <span> <b className='text-red-400'>Email:</b> {account.email}</span>
                                       <br />
                                       <span> <b className='text-red-400'>Mật khẩu:</b> {account.password}</span>
                                    </div>
                                }
                                <div onClick={() => setIsOpen(prev => !prev)} className=' bg-red-500 w-[100px] h-[40px] text-yellow-50 rounded p-2 text-center font-bold'> <i className="fa-solid fa-circle-user "></i>{account.name}  </div>


                                {/* <button onClick={hadleLogin} className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng nhập</button> */}

                                <div className='mb-5'>
                                    <button onClick={handleLogout} className='bg-red-500 w-[100px] text-yellow-50 rounded p-2 '>Đăng xuất</button>
                                </div>
                            </div>

                        </p>
                    </> : <>
                        <div className='ml-[1070px]'>
                            <div className='text-sm  flex gap-5  '>
                                <button onClick={hadleLogin} className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng nhập</button>
                                {/* <button onClick={handleLogout} className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng xuất</button> */}
                            </div>
                        </div>
                    </>
                }
                <p className='font-bold'>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
                <br />
                <ul className='flex gap-14 justify-center  text-red-900  '>
                    <li>Trang chủ</li>
                    <li onClick={hadleNew}>Mới ra mắt</li>
                    <li onClick={hadleBig}>Bánh cỡ lớn</li>
                    <li onClick={hadleMall}>Bánh cỡ nhỏ</li>
                </ul>
                <br />

            </div>
            <br />

            <div >

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <img
                            className='w-[100%] h-[400px]'
                            src="https://statics.vincom.com.vn/xu-huong/image19-1668053994.png"
                            alt="Slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-[100%] h-[400px]'
                            src="https://mms.img.susercontent.com/vn-11134513-7r98o-lsvcssmayxll00@resize_ss1242x600!@crop_w1242_h600_cT"
                            alt="Slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-[100%] h-[400px]'
                            src="https://homepage.momocdn.net/placebrand/s/momo-upload-api-200415095745-637225414650036541.jpg"
                            alt="Slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-[100%] h-[400px]'
                            src="https://origato.com.vn/wp-content/uploads/2023/10/banner-web-origato.jpg"
                            alt="Slide 4"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-[100%] h-[400px]'
                            src="https://friendshipcakes.com/wp-content/uploads/2023/01/2-1.png"
                            alt="Slide 5"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <br />
            <br />
            {/* render sản phẩm */}
            <div className='flex flex-wrap gap-[30px]   justify-center '>
                {cupcake.map((item: any) => {
                    return <div className=' border border-w bg-yellow-50 w-[250px] p-3 rounded'>
                        <b className=' text-red-800'> <i className="fa-solid fa-star"></i>{item.name}</b>

                        <img onClick={() => handleDetail(item.id)} className='w-[250px] h-[200px]' src={item.img} alt="" />


                        <div className='flex items-center gap-2 text-red-500'><i className="fa-solid fa-heart"></i>
                            <p>{item.describe}</p>
                        </div>
                        <p className='text-red-500 font-bold'>----------------------------------</p>
                        <b className='flex justify-center items-center'><i className="fa-solid fa-money-bill"></i> {item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}

                            <button onClick={() => handleAddToCart(item.id)} className='border bg-red-500 p-1 rounded w-[80px] text-white'><i className="fa-solid fa-cart-shopping"></i></button>
                        </b>

                    </div>
                })}
                {/*  */}
            </div>
            <br />
            <div className='flex justify-center'>
                <b className='text-red-900' >-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b>

            </div>
            <br />
            <div className='flex justify-center'>
                <div className='border border-w bg-yellow-50 w-[1090px] rounded p-3 '>
                    <p className='text-3xl text-red-800'><i className="fa-solid fa-bug"></i></p>

                    <div className='flex justify-center' >
                        <div>
                            <b className='m-8'>Giới Thiệu</b>
                            <div className='flex ml-8 items-center'>
                                <p>sản phẩm dùng sữa tươi không chất bảo quản, trang trại tại nhà, trứng, lúa mạch tại trang trại của cửa hàng.</p>
                                <p className='border bg-red-900 text-white font-bold p-3 rounded flex justify-center'>
                                    uy tín, chất lượng làm nên thương hiệu!!
                                </p>
                            </div>
                            <p className='font-bold text-red-900'>Huyen Trang ❤️</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <b className='text-red-900' >-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b>

            </div>
            <br />
            <div className='flex justify-center'>
                <div className='border border-w bg-yellow-50 w-[1090px] rounded p-3 flex gap-4 '>
                    <div>
                        <p><img src="https://cdn.tuoitre.vn/2018/5/3/ngot-1525361526527572048447.jpg" alt="" /></p>
                    </div>
                    <div>
                        <b className='text-2xl  text-red-800'><i className="fa-solid fa-image"></i></b>

                        <b className='text-red-500 p-7'>Happy cupcake</b>
                        <br />
                        <br />
                        <br />
                        <p className='text-red-900'>“Giá trị của món ăn ngon, được quyết định bởi lương tâm của người đầu bếp.”</p>

                        <b className='text-red-500'>----------------------------------------------------------------------------</b>
                        <br />
                        <b><i className="fa-solid fa-heart text-red-500"></i>Bạn là người mang đến niềm vui làm bánh cho chúng tôi.</b>
                    </div>
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <b className='text-red-900' >-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b>

            </div>
            <br />
            <div className='bg-yellow-50  '>

                <div className='flex p-6 justify-center   '>
                    <div className='my-16'>
                        <b className='text-3xl text-red-800'><i className="fa-solid fa-spoon"></i>cupcake</b>
                        <br />
                        <br />
                        <div className='flex gap-5 justify-center'>
                            <div>
                                <img className='w-[400px] rounded' src="https://thuhuongcake.vn/wp-content/uploads/2024/01/banh-kem-hoa-dao-dep-id1395_65a7aac47e41e.webp" alt="" />
                            </div>
                            <div className='my-3 text-red-600'>
                                <b>“Mình tôn trọng khách hàng thì khách hàng không phụ mình.”</b>
                                <br />
                                <br />
                                <b> <i className="fa-brands fa-facebook"></i>Liên hệ với chúng tôi </b>
                                <br />
                                <br />
                                <b><i className="fa-solid fa-truck-fast"></i>Giao hàng khi bạn cần</b>
                                <br />
                                <br />
                                <b><i className="fa-solid fa-location-dot"></i>Thanh Xuân-Hà Đông-Hà Nội</b>
                            </div>
                        </div>
                    </div>

                    <div>
                        <b><i className="fa-brands fa-wordpress"></i>Hân hạnh phục vụ!!!</b>
                        <br />
                        <br />
                        <img className='w-[600px] rounded' src="https://cdn-i.vtcnews.vn/resize/th/upload/2024/06/26/choco-bakery-21253496.jpg" alt="" />

                    </div>
                </div>
                <p className='font-bold'>-------------------------------------------------------------------------------------------------------------------------------------------
                    <i className="fa-solid fa-cake-candles text-3xl text-red-600  "></i>
                    -<i className="fa-solid fa-gift text-3xl text-pink-600"></i>
                    -<i className="fa-solid fa-heart text-3xl text-red-900"></i>---------------------------------------
                </p>

            </div>

        </div>
    )
}
