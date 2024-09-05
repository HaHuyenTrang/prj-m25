"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../app/sign-in/page'; // Đường dẫn đến component đăng nhập
import SignUp from '../app/sign-up/page'; // Đường dẫn đến component đăng ký

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;