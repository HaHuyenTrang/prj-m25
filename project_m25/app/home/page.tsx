"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/swiper-bundle.min.css';
export default function page() {
    return (
        <div className='bg-red-400 w-auto h-auto'>
            <div className='bg-yellow-50 ' >
                <div className='flex gap-[800px] justify-center p-5' >
                    <h1 className='text-3xl font-bold text-red-800'><i className="fa-solid fa-cake-candles text-3xl text-red-800  "></i> Tiệm bánh ngọt</h1>
                    <h1 className='text-3xl  text-red-600 '>
                        <i className="fa-brands fa-facebook "></i>
                        <i className="fa-brands fa-twitter"></i>

                    </h1>

                </div>
                <div className='ml-[1070px]'>
                    <div className='text-sm  flex gap-5  '>
                        <button className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng nhập</button>
                        <button className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng kí</button>
                    </div>
                </div>
                <p className='font-bold'>---------------------------------------------------------------------------------------------------------------------------------------------------------
                    <i className="fa-solid fa-cake-candles text-3xl text-red-600  "></i>
                    -<i className="fa-solid fa-gift text-3xl text-pink-600"></i>
                    -<i className="fa-solid fa-heart text-3xl text-red-900"></i>---------------------------------------
                </p>
                <br />
                <ul className='flex gap-14 justify-center  text-red-900  '>
                    <li>Trang chủ</li>
                    <li>Mới ra mắt</li>
                    <li>Bánh cỡ lớn</li>
                    <li>Bánh cỡ nhỏ</li>
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
            <div className='flex gap-[30px] justify-center '>
                <div className=' border border-w bg-yellow-50 w-[250px] p-3 rounded'>
                    <b className=' text-red-800'> <i className="fa-solid fa-star"></i>June Prontotiob</b>
                    <p>
                        <img className='w-[250px] h-[200px]' src="https://static.salekit.com/image/shop/2/source/kinh-doanh-banh-ngot.jpg" alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-red-500'><i className="fa-solid fa-heart"></i>
                        <p>đáy bông lan và kem trứng, dâu trang trí bên trên</p>
                    </div>
                    <p className='text-red-500 font-bold'>----------------------------------</p>
                    <b className='flex justify-center items-center'><i className="fa-solid fa-money-bill"></i> $500

                        <button className='border bg-red-500 p-1 rounded w-[80px] text-white'>Mua</button>
                    </b>
                </div>
                <div className=' border border-w bg-yellow-50 w-[250px] p-3 rounded'>
                    <b className=' text-red-800'><i className="fa-solid fa-thumbs-up"></i> D#D Gapeoke</b>
                    <p>
                        <img className='w-[250px] h-[200px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczFoiCDjHROKhsslgziyQpoEF_6K8TjyKsx-Qs9yGYe2PjLQTCFIlJuAtsbBAIUb80O8&usqp=CAU" alt="" />
                    </p>
                    <p className='flex items-center gap-2 text-red-500'>
                        <i className="fa-solid fa-heart"></i>hộp bánh kép, kẹp nhân dai dẻo, mềm mịn</p>
                    <p className='text-red-500 font-bold'>----------------------------------</p>

                    <b className='flex justify-center items-center'><i className="fa-solid fa-money-bill"></i> $500

                        <button className='border bg-red-500 p-1 rounded w-[80px] text-white'>Mua</button>
                    </b>
                </div>
                <div className=' border border-w bg-yellow-50 w-[250px] p-3 rounded'>
                    <b className=' text-red-800'><i className="fa-regular fa-heart"></i> Happy Aniversary</b>
                    <p>
                        <img className='w-[250px] h-[200px]' src="https://tiembanhkimnhu.com/wp-content/uploads/2024/03/set-banh-ngot-ngao-danh-cho-ngay-quoc-te-phu-nux.jpg" alt="" />
                    </p>

                    <p className='flex items-center gap-2 text-red-500'>
                        <i className="fa-solid fa-heart"></i>bánh kèm nến, như 1 điều ước nho nhỏ, ngọt ngào</p>
                    <p className='text-red-500 font-bold'>----------------------------------</p>

                    <b className='flex justify-center items-center'><i className="fa-solid fa-money-bill"></i> $500

                        <button className='border bg-red-500 p-1 rounded w-[80px] text-white'>Mua</button>
                    </b>
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <b className='text-red-900' >-----------------------------------------------------------------------------------------------------------------------------</b>

            </div>
            <br />
            <div className='flex justify-center'>
                <div className='border border-w bg-yellow-50 w-[810px] rounded p-3 '>
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
                <b className='text-red-900' >-----------------------------------------------------------------------------------------------------------------------------</b>

            </div>
            <br />
            <div className='flex justify-center'>
                <div className='border border-w bg-yellow-50 w-[810px] rounded p-3 flex gap-4 '>
                    <div>
                        <p><img src="https://cdn.tuoitre.vn/2018/5/3/ngot-1525361526527572048447.jpg" alt="" /></p>
                    </div>
                    <div>
                        <b className='text-2xl  text-red-800'><i className="fa-solid fa-image"></i></b>

                        <b className='text-red-500 p-7'>Happy cupcake</b>
                        <br />
                        <br />
                        <p className='text-red-900'>“Giá trị của món ăn ngon, được quyết định bởi lương tâm của người đầu bếp.”</p>
                        <b className='text-red-500'>----------------------------------------------------------------------------</b>
                        <b><i className="fa-solid fa-heart text-red-500"></i>Bạn là người mang đến niềm vui làm bánh cho chúng tôi.</b>
                    </div>
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <b className='text-red-900' >-----------------------------------------------------------------------------------------------------------------------------</b>

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
