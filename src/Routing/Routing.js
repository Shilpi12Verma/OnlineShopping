import React, {lazy,Suspense} from 'react'
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import Cart from '../Components/cart'
// import About from '../Components/About'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Login from '../Components/Login'
import ProductCategory from '../Product/ProductCategory/ProductCategory'
import PNF from '../Components/PNF'
import Header from '../Header/Header'
import Registration from '../Profile/registration'
import Profile from '../Profile/Profile'
import IsAuth from './IsAuth'

const About=lazy(()=>{
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Components/About')),2000);
    });
});

const Routing = () => {

    return (
        <Router>
        <Header/>
        <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
            
            <Route path="home_page" element={<Home/>}></Route>
            <Route path="about_page" element={<About/>}></Route>

                <Route element={<IsAuth/>}>
                    <Route path="product_page" element={<ProductCategory/>}></Route>
                    <Route path="profile_page" element={<Profile/>}></Route>
                </Route>
            
                <Route path="login_page" element={<Login/>}></Route>
                <Route path="contact_page" element={<Contact/>}></Route>
                <Route path="cart_page" element={<Cart/>}></Route>
                <Route path="regis_page" element={<Registration/>}></Route>

                <Route path="*" element={<PNF/>}/>
            </Routes>
            </Suspense>
        </Router>
    )
}

export default Routing
