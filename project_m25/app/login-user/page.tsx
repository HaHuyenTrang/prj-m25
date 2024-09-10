"use client"
import "../login-user/login-user.css"
import { useEffect, useState } from "react";
import { Account, User } from "../interface/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUser } from "../store/user/userStore";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

function validateEmail(email: any) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export default function Login_register() {
    const userState = useSelector((state: any) => state.userStore.user);
    const dispatch = useDispatch();
    const route = useRouter()

    const [isLogin, setIsLogin] = useState(true);

    const [inputValue, setInputValue] = useState<User>({
        id: Math.ceil(Math.random() * 10000),
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        status: 0,
        cart: []
    })

    // Hiển thị lỗi khi chưa có dữ liệu
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [account, setAccount] = useState<Account>({
        email: "",
        password: "",
    })

    const [errorAccount, setErrorAccount] = useState({
        email: "",
        password: "",
    })

    const resetData = () => {
        setInputValue({
            id: 0,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            status: 0,
            cart: []
        })
    }

    // Hàm đăng kí
    const handleSubmit = async (e: React.FormEvent) => {
        // Ngăn chặn load trang
        e.preventDefault();

        // Validate dữ liệu
        let valid = true;
        if (!inputValue.name) {
            error.name = "Tên không được để trống";
            valid = false;
        } else {
            error.name = ""
        }

        if (!inputValue.email) {
            error.email = "Email không được để trống";
            valid = false;
        } else if (!validateEmail(inputValue.email)) {
            error.email = "Email không đúng định dạng";
            valid = false;
        } else if (userState.some((item: any) => item.email === inputValue.email)) {
            error.email = "Email đã tồn tại";
            valid = false;
        } else {
            error.email = ""
        }

        if (!inputValue.password) {
            error.password = "Mật khẩu không được để trống"
            valid = false;
        } else {
            error.password = "";
        }

        if (!inputValue.confirmPassword) {
            error.confirmPassword = "Xác nhận mật khẩu không được để trống";
            valid = false
        } else if (inputValue.password !== inputValue.confirmPassword) {
            error.confirmPassword = "Mật khẩu không khớp";
            valid = false
        } else {
            error.confirmPassword = ""
        }

        setError({ ...error })

        if (valid) {
            const newUser = {
                name: inputValue.name,
                email: inputValue.email,
                password: inputValue.password,
                confirmPassword: inputValue.confirmPassword
            }
            await dispatch(addUser(newUser))
            await dispatch(getAllUser());
            resetData()
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    //Hàm đăng nhập
    const handleSubmitLogin = (e: React.FormEvent) => {
        let valid = true;
        e.preventDefault();
        if (!account.email) {
            setErrorAccount((prevErr) => ({
                ...prevErr,
                email: "Vui lòng nhập email"
            }))
            valid = false;
        } else {
            setErrorAccount((prevErr) => ({
                ...prevErr,
                email: ""
            }))
        }

        if (!account.password) {
            setErrorAccount((prevErr) => ({
                ...prevErr,
                password: "Vui lòng nhập mật khẩu"
            }))
            valid = false
        } else {
            setErrorAccount((prevErr) => ({
                ...prevErr,
                password: ""
            }))
        }

        if (valid && userState.length > 0) {
            const findUser = userState.find((user: any) => user.email === account.email && user.password === account.password);
            console.log(findUser)
            if (findUser) {
                if (findUser.status === 1) {
                    alert("Tài khoản đã bị chặn!")
                } else {
                    localStorage.setItem("account", JSON.stringify(findUser))
                    alert("Đăng nhập thành công");
                    route.push("/home")
                }

            } else {
                setErrorAccount((prevErr) => ({
                    ...prevErr,
                    password: "Tài khoản hoặc mật khẩu không đúng"
                }))
                valid = false;
            }
        }
    }

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }

    return (
        <div className="main" style={{ backgroundColor: "pink", margin: "0 auto", marginTop: 40 }}>
            <input type="checkbox" id="chk" aria-hidden="true" checked={isLogin} />
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chk" aria-hidden="true" onClick={() => setIsLogin(false)} >
                        Đăng kí
                    </label>
                    <input style={{ backgroundColor: "white" }} type="text" name="name" placeholder="Tên" onChange={handleChange} value={inputValue.name} />
                    {
                        error.name && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{error.name}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="email" name="email" placeholder="Gmail" onChange={handleChange} value={inputValue.email} />
                    {
                        error.email && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{error.email}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} value={inputValue.password} />
                    {
                        error.password && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{error.password}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="password" name="confirmPassword" placeholder="Mật khẩu" onChange={handleChange} value={inputValue.confirmPassword} />
                    {
                        error.confirmPassword && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{error.confirmPassword}</span>
                    }

                    <button type="submit">Đăng kí</button>
                </form>
            </div>
            <div style={{ backgroundColor: "white" }} className="login">
                <form onSubmit={handleSubmitLogin}>
                    <label style={{ color: "pink", }} htmlFor="chk" aria-hidden="true"
                        onClick={() => setIsLogin(true)}
                    >
                        Đăng nhập
                    </label>
                    <input style={{ backgroundColor: "pink" }} type="text" name="email" placeholder="Gmail" onChange={handleLogin} value={account.email} /> <br />
                    {
                        errorAccount.email && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{errorAccount.email}</span>
                    }
                    <input style={{ backgroundColor: "pink" }} type="password" name="password" placeholder="Mật khẩu" onChange={handleLogin} value={account.password} /> <br />
                    {
                        errorAccount.password && <span style={{ color: "red", fontSize: 12, margin: 75 }}>{errorAccount.password}</span>
                    }
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>

    )
}
