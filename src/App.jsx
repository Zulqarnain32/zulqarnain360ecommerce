import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import ProductContextProvider from './global/ProductContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
import CartContextComponent from './global/CartContext'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <ProductContextProvider>
     <CartContextComponent>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path = "/" element = {<Home/>}/>
           <Route path = "/products" element = {<Product/>}/>
           <Route path = "/cart" element = {<Cart/>}/>
           {/* <Route path = "/productdetail" element = {<ProductDetail/>}/> */}
           <Route path = "/contact" element = {<Contact/>}/>
           <Route path="/single-product/:productId" element = {<SingleProduct/>} />
        </Routes>
      </BrowserRouter>
     </CartContextComponent>
    </ProductContextProvider>  
    </>
  )
}

export default App
