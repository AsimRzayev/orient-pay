import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './modules/Home/Home'
import Blogs from './modules/Blogs/Blogs'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.BLOGS} element={<Blogs />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
