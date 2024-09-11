"use client"
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../sign-up/page"
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { addCarts, getAllProduct, getProductById } from '@/app/store/product/productStore';
import { getAllUser } from '../../store/user/userStore';
// import { useParams } from 'react-router-dom';
// import { Product } from '@/app/interface/product';
// import 'swiper/swiper-bundle.min.css';
export default function page() {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem("account") || "null"));
    //   const cart = useSelector((state: any) => state.productReducer.cart);
    const users = useSelector((state: any) => state.userStore.user)
    const route = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
        // Lấy giỏ hàng từ localStorage và set vào Redux state
        // dispatch(setCart(account.cart));
        dispatch(getAllUser())
    }, [dispatch]);

    //   const handleDetail = (id: number) => {
    //     console.log(id);
    //     navigate(`/detail/${id}`);
    //   };

    const handleLogout = () => {
        const confirmLogOut = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
        if (confirmLogOut) {
            localStorage.removeItem("account");
            route.push("/sign-up");
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
    const pathName = usePathname(); 
    const id = pathName.split("/").pop(); 
    const cupcakes: any = useSelector(((state: any) => state.productStore.productDetail))
    console.log(cupcakes)

    useEffect(() => {
        if (id) {
            dispatch(getProductById(Number(id)))
        }
    }, [dispatch, id])


    // const product = cupcakes.find((item: Product) => item.id.toString() === id);
    // console.log(product)

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
                <div className='ml-[1070px]'>
                    <div className='text-sm  flex gap-5  '>
                        <button className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng nhập</button>
                        <button onClick={handleLogout} className='bg-red-500 text-yellow-50 rounded p-2 '>Đăng xuất</button>
                    </div>
                </div>
                <p className='font-bold'>-------------------------------------------------------------------------------------------------------------------------------------------
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
            {/* render chi tiết sản phẩm */}

            <div className=' bg-yellow-50' style={{ display: "flex" }} >
                <ul className='item-flower' key={cupcakes.id} style={{ width: "800px", height: "550px", padding: "40px" }} >
                    <li className='img-prd' ><img src={cupcakes.img} style={{ width: "600px", height: "400px" }} alt="" /></li>
                    {/* <li>{index+1}</li> */}
                    <br />
                    <br />
                    <li><b style={{ fontSize: "30px" }}><i className="fa-solid fa-star"></i>{cupcakes.name}</b></li>

                </ul>
                <ul className='item-flower' style={{ fontSize: "15px", width: "800px", height: "550px", padding: "30px", paddingTop: "80px" }}>
                    <h3 className='font-bold text-3xl text-red-500' >Cupcake</h3>
                    <div className='ml-14'>
                    Thân em zừa ú lại zừa mặp <br />
                    Bảy nổi ba chìm với sốt bơ <br />
                    Rắn nát phụ thuộc tay (nhỏ) chủ tịm <br />
                    Mà em vững giữ giá vàng son!
                    </div>
                  <br />
                    <div className='ml-20'>
                        <ul className=' gap-[50px]'>
                            <li className='font-bold text-2xl text-red-700'><i className="fa-solid fa-barcode"></i> Xuất xứ-nguồn gốc rõ ràng</li>
                            <li className='font-bold text-2xl text-red-700'><i className="fa-solid fa-tag"></i> Giá cả thị trường hợp lí</li>
                            <li className='font-bold text-2xl text-red-700'><i className="fa-solid fa-cart-shopping"></i> Mua sắm tiện lợi, dân dụng</li>
                        </ul>
                    </div>
                       <li>
                      <br />
                        <ul key={cupcakes.id}  >
                         

                            <li >
                                {/* <b style={{ fontSize: "25px" }} className='cl-price'>{cupcakes.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b> */}
                            </li>
                            <br />
                            <li >Hình thức: {cupcakes.expression}</li>
                            <div className='button-buy' style={{ display: "flex", justifyContent: "center" }}>
                                {/* <li><button onClick={handleDetail}>Xem chi tiết</button></li> */}

                            </div>
                            <li>Mô tả bánh: {cupcakes.describe}</li>
                            <br />
                            <li className='flex justify-center'><button className='border border-white bg-red-600 text-white w-[200px] h-[50px] rounded'>Mua </button></li>
                        </ul>

                    </li>

                </ul>


            </div>




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
