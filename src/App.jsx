import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import './scss/app.scss'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
