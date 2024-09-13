"use client"
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import '../login-user/page'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getCartProduct, updateProductQuantity } from '@/services/cart.service';
import { useParams } from 'react-router-dom';
export default function page() {
    const { id } = useParams()
    const cart = useSelector((state: any) => state.cartReducer.cart);
    console.log(12314, cart);
    const user = JSON.parse(localStorage.getItem("account") || "[]")
    const dispatch = useDispatch()

    useEffect(() => {
        if (user.id) {
            dispatch(getCartProduct(user.id))
        }
    }, [dispatch, user.id])

    const total = cart.reduce((total: number, cart: any) => {
        return total + cart.product.price * cart.product.quantity
    }, 0)

    const handleQuantityChange = (itemId: number, newQuantity: number) => {
        const idUser = id; // Lấy idUser từ useParams

        if (newQuantity < 1) return; // Đảm bảo số lượng ít nhất là 1

        // Dispatch action để cập nhật số lượng
        dispatch(updateProductQuantity({ itemId, quantity: newQuantity, idUser }))
            .unwrap()
            .then(() => {
                console.log("Quantity updated successfully");
            })
            .catch((error: any) => {
                console.error("Error updating quantity:", error);
            });
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        itemId: number
    ) => {
        const newQuantity = parseInt(event.target.value, 10);
        handleQuantityChange(itemId, newQuantity);
    };
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

                <p className='font-bold'>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>


            </div>
            <br />

            {/* <div >

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
            <br /> */}
            {/* render sản phẩm */}

            <div className='flex justify-center'>

                <table className='border-2 border-yellow-500 bg-yellow-50  w-[1090px] text-center items-center'>
                    <thead className='border border-yellow-50'>
                        <tr className='text-xl'>
                            <th>Sản phẩm</th>
                            <th>Ảnh</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody className='border-2 border-yellow-500 '>
                        {
                            cart.map((item: any) => (
                                <tr className='text-red-700'>
                                    <td>{item.product.name}</td>
                                    <td >
                                        <img className='w-[250px] h-[200px] ml-36' src={item.product.img} alt="" />
                                    </td>
                                    <td>{item.product.price}</td>
                                    <td className='flex w-[100px] ml-10 items-center mt-20'>
                                        <button className='bg-red-400 w-[20px] h-[26px] ml-4' onClick={() =>
                                            handleQuantityChange(item.id, item.product.quantity - 1)
                                        }>-</button>
                                        <input className='w-[50px] text-center ' type="text" value={item.product.quantity} name='quantity' min="1"
                                            onChange={(e) => handleInputChange(e, item.id)} />
                                        <button className='bg-red-400 w-[20px] h-[26px]' onClick={() =>
                                            handleQuantityChange(item.id, item.product.quantity + 1)
                                        }>+</button>

                                    </td>
                                    <td>{item.product.price * item.product.quantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center '>
                <div className='border-2 border-yellow-500 bg-yellow-50 w-[1090px] font-bold text-red-800'>
                    Tổng: <span className='ml-[940px]'>{total} VNĐ</span>
                </div>
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
