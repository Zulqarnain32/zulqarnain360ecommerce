import React, { createContext, useState } from 'react'

import dslr from "/assets/dslr.jpg"
import headphones from "/assets/headphones.jpg"
import microphone from "/assets/microphone.jpg"

import computer1 from "/assets/computer1.webp"
import computer11 from "/assets/computer11.jpg"
import computer12 from "/assets/computer12.jpg"
import computer13 from "/assets/computer13.jpg"
import computer14 from "/assets/computer14.jpg"
import computer15 from "/assets/computer15.jpg"
import computer16 from "/assets/computer16.jpg"

import watch from "/assets/watch.jpg"
import watch1 from "/assets/watch1.webp"
import watch2 from "/assets/watch2.webp"
import watch3 from "/assets/watch3.webp"
import watch4 from "/assets/watch4.webp"

import mobile0 from "/assets/iphone.jpg"
import mobile1 from "/assets/mobile1.webp"
import mobile2 from "/assets/mobile2.webp"
import mobile4 from "/assets/mobile4.webp"

import mobile61 from "/assets/phone61.jpg"
import mobile62 from "/assets/phone62.jpg"
import mobile63 from "/assets/phone63.jpg"
import mobile64 from "/assets/phone64.jpg"
import mobile65 from "/assets/phone65.jpg"
import mobile66 from "/assets/phone66.jpg"

import laptop1 from "/assets/laptop1.jpeg"
import laptop2 from "/assets/laptop2.webp"
import laptop4 from "/assets/laptop4.webp"
import laptop11 from "/assets/laptop11.jpg"
import laptop12 from "/assets/laptop12.jpg"
import laptop13 from "/assets/laptop13.jpg"
import laptop14 from "/assets/laptop14.jpg"
import laptop15 from "/assets/laptop15.jpg"

import accessories1 from "/assets/accessories1.jpeg"
import accessories12 from "/assets/accessories12.jpg"
import accessories13 from "/assets/accessories13.jpg"
import accessories14 from "/assets/accessories14.jpg"
import accessories15 from "/assets/accessories15.jpg"
import accessories16 from "/assets/accessories16.jpg"

export const productContext = createContext()

const ProductContextProvider = (props) => {
    const [products] = useState([
      
        {id:1, name: "Head Phone", price:200,image:headphones, status:"new",category:"headphoene"},
        {id:2, name: "Iphone", price:2000,image:mobile0, status:"hot",category:"mobile",category:"mobile"},
        {id:3, name: "Microphone", price:70,image:microphone, status:"hot",category:"accessories"},
        {id:4, name: "Accessories", price:400,image:accessories1, status:"new",category:"accessories"},
        {id:5, name: "MSI GS66 ", price:1200,image:laptop1, status:"hot",category:"laptop"},
        {id:6, name: "Dslr", price:100,image:dslr, status:"hot",category:"camera"},
        {id:7, name: "MSI MP1CQR", price:1680,image:computer1, status:"hot",category:"computer"},
        {id:8, name: "Rolex G7", price:260,image:watch, status:"new",category:"watch"},
        {id:9, name: "Huawei", price:700,image:mobile1, status:"new",category:"mobile"},
        {id:10, name: "Vivo", price:760,image:mobile2, status:"new",category:"mobile"},
        {id:11, name: "Oppo", price:560,image:mobile4, status:"new",category:"mobile"},
        {id:12, name: "Asus ROG14", price:900,image:laptop4, status:"new",category:"laptop"},
        
        

        {id:13, name: "Fossil Gen 5", price:240,image:watch1, status:"new",category:"watch"},
        {id:14, name: "Garmin Fenix 6", price:350,image:watch2, status:"new",category:"watch"},
        {id:15, name: "Apple Series 7", price:450,image:watch3, status:"new",category:"watch"},
        {id:16, name: " GTR 3", price:700,image:watch4, status:"new",category:"watch"},

        

        {id:17, name: "Dell XPS", price:400,image:laptop2, status:"new",category:"laptop"},
        {id:18, name: "MacBook pro", price:400,image:laptop11, status:"new",category:"laptop"},
        {id:19, name: "LG Gram", price:400,image:laptop12, status:"new",category:"laptop"},
        {id:20, name: "Acer Swift", price:400,image:laptop13, status:"new",category:"laptop"},
        {id:21, name: "Hp x360", price:400,image:laptop14, status:"new",category:"laptop"},
        {id:22, name: "Lenovo X! ", price:400,image:laptop15, status:"new",category:"laptop"},

        

        {id:23, name: " Dell  U2719D", price:230,image:computer11, status:"hot",category:"computer"},
        {id:24, name: "LG 27G90", price:230,image:computer12, status:"hot",category:"computer"},
        {id:25, name: "BenQ PD3200U", price:230,image:computer13, status:"hot",category:"computer"},
        {id:26, name: "HP Omen X 27", price:230,image:computer14, status:"hot",category:"computer"},
        {id:27, name: "Acer  X27", price:230,image:computer15, status:"hot",category:"computer"},
        {id:28, name: "ASUS PG279Q", price:230,image:computer16, status:"hot",category:"computer"},


        {id:29, name: "RAVPower USB", price:400,image:accessories12, status:"new",category:"accessories"},
        {id:30, name: " AirPods Pro", price:400,image:accessories13, status:"new",category:"accessories"},
        {id:31, name: " Samsung SSD", price:400,image:accessories14, status:"new",category:"accessories"},
        {id:32, name: "JBL Speaker", price:400,image:accessories15, status:"new",category:"accessories"},
        {id:33, name: " Core Charger", price:400,image:accessories16, status:"new",category:"accessories"},


        {id:34, name: "Samsung  S21", price:400,image:mobile61, status:"new",category:"mobile"},
        {id:35, name: " Pixel 6", price:400,image:mobile62, status:"new",category:"mobile"},
        {id:36, name: "OnePlus 9 ", price:400,image:mobile63, status:"new",category:"mobile"},
        {id:37, name: "Xiaomi  11", price:400,image:mobile64, status:"new",category:"mobile"},
        {id:38, name: "Huawei P50 ", price:400,image:mobile65, status:"new",category:"mobile"},
        {id:39, name: "LG Velvet", price:400,image:mobile66, status:"new",category:"mobile"},
        
        
    ])
  return (
    <>
       <productContext.Provider value={{products:[...products]}}>
         {props.children}
       </productContext.Provider>
    </>
  )
}

export default ProductContextProvider
