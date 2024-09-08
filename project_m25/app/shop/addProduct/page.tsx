"use client"
import { useState } from 'react'
import './add.css'
import { AddProduct } from '../../interface/addP'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/product/productStore'
import { useRouter } from 'next/navigation'

export default function FormAddProduct() {
    const dispatch = useDispatch();
    const route = useRouter()
    const [inputValue, setInputValue] = useState<AddProduct>({
        name: "",
        img: "",
        describe: "",
        expression: "",
        price: 0,
    })

    const [error, setError] = useState({
        name: "",
        img: "",
        describe: "",
        expression: "",
    })

    const handleAdd = () => {
        let valid = true;
        if (!inputValue.name) {
            error.name = "Tên không được để trống";
            valid = false;
        } else {
            error.name = "";
        }

        if (!inputValue.img) {
            error.img = "Vui lòng nhập đường dẫn";
            valid = false;
        } else {
            error.img = ""
        }

        if (!inputValue.describe) {
            error.describe = "Vui lòng nhập mô tả";
            valid = false
        } else {
            error.describe = ""
        }

        if (!inputValue.expression) {
            error.expression = "Vui long chọn hình thức";
            valid = false;
        } else {
            error.expression = ""
        }

        setError({ ...error })

        if (valid) {
            const newProduct = {
                name: inputValue.name,
                expression: inputValue.expression,
                describe: inputValue.describe,
                price: Number(inputValue.price),
                img: inputValue.img
            }
            dispatch(addProduct(newProduct));
            route.push("/shop")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    return (
        <div className='Adminnn' style={{ display: "flex", alignItems: "center" }}>
            <div className='form_addP'>
                <h2 className='font-bold text-2xl'>Thêm sản phẩm</h2>
                <br />
                <b>Tên: </b>
                <input type="text" name="name" id="" placeholder='Nhập tên sản phẩm' value={inputValue.name} onChange={handleChange} />
                {
                    error.name && <span style={{ color: "red", fontSize: 14 }}>Tên không được để trống</span>
                }
                <br />
                <br />
                <b>Giá:</b>
                <input  type="text" name="price" id="" placeholder="Nhập giá trị sản phẩm" value={inputValue.price} onChange={handleChange} />
                <br />
                <br />
                <b>Hình thức:</b>
                <input  type="text" name="expression" id="" placeholder="loại bánh" value={inputValue.expression} onChange={handleChange} />
                {
                    error.expression && <span style={{ color: "red", fontSize: 14 }}>{error.expression}</span>
                }
                <br />
                <br />
                <b>Mô tả:</b>
                <input type="text" name="describe" id="" placeholder="Nhập mô tả" value={inputValue.describe} onChange={handleChange} />
                {
                    error.describe && <span style={{ color: "red", fontSize: 14 }}>{error.describe}</span>
                }
                <br />
                <br />
                <b>Ảnh:</b>
                <input type="text" name="img" id="" placeholder="image" value={inputValue.img} onChange={handleChange} />
                {
                    error.img && <span style={{ color: "red", fontSize: 14 }}>{error.img}</span>
                }
                <br />
                <br />
                <div className='flex justify-center'>
                    <button className='border border-white bg-pink-500 w-[100px]  rounded'  onClick={handleAdd}>Thêm</button>

                </div>
            </div>

        </div>
    )
}
