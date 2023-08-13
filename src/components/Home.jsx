import React from 'react'
import { FaAmazon, FaCar, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { BsFillTelephoneFill,BsCurrencyDollar } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { RiSecurePaymentLine } from "react-icons/ri"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
     {/* ============== Forst Container Starts ================ */}

      <div className="home-container">
        <div className="home-content">
          <p className='welcome'>WELCOME TO</p>
          <h1 className='store-name'>AL-Farooq Store</h1>
          <p className='store-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit in. Eveniet neque dolorem vitae sapiente officiis voluptatem, placeat nobis necessitatibus voluptate sed click below button to be serverd</p>
          <button className="shop-now"><Link to="products" className='alllink'>SHOP NOW</Link></button>
        </div>
        <div className="home-img">
          {/* <img src="/assets/watch2.webp" className='home-image' /> */}
        </div>
      </div>

      {/* ============== First Container Ends ================ */}

      {/* ============ Second Container Starts ============== */}

      <div className="features-services">
        <div className="features">
          <p className="welcome">CHECK NOW</p>
          <h1 className="features-heading">Our Features Services</h1>
          <div className="home-items">
            <div className="home-item-box kmaal">
               <img src="/assets/computer1.webp" alt="" />
               <div className="item-info">
                <div className="item-name">Intel Laptop</div>
                <div className="item-price">$300.00</div>
               </div>
            </div>
            <div className="home-item-box kmaal">
               <img src="/assets/watch1.webp" alt="" className='pange'/>
               <div className="item-info">
                <div className="item-name">Watch</div>
                <div className="item-price">$120.00</div>
               </div>
            </div>
            <div className="home-item-box kmaal">
               <img src="/assets/iphone.jpg" alt="" />
               <div className="item-info">
                <div className="item-name">Iphone</div>
                <div className="item-price">$800.00</div>
               </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============== Second Container Ends ================ */}

      {/* =============== Third Container Starts ============== */}

      <div className="functionalities-container">
         <div className="delivery-box one">
           <div className='func-box'>
              <div className="func-icon"><RiSecurePaymentLine/></div>
              <div className="func-title">super secure payment system </div>
           </div>
         </div>
         <div className="partition-box one">
            <div className='partitions'>
              <div className="func-icon"><BsFillTelephoneFill/></div>
              <div className="func-title">non-contact shipping</div>
            </div>
            <div className='partitions'>
              <div className="func-icon"><BsCurrencyDollar/></div>
              <div className="func-title">money-back guaranteed</div>
            </div>
         </div>
         <div className="secure-payment-box one">
           <div className='func-box'>
            <div className="func-icon"><FaCar/></div>
            <div className="func-title">super fast and free delivery</div>
           </div>
         </div>
      </div>

      {/* ============= Third Container Ends ================ */}

      {/* ============= Last Container Starts =============== */}

     <div className="our-clients-container">
       <div className="clients">
        <p>Trusted by 1000+ Companies</p>
        <div className="companies">
          <div className="company"> <FaWhatsapp/> Whatsapp</div> 
          <div className="company"> <FaFacebook/> Facebook</div> 
          <div className="company"> <FaAmazon/> Amazone</div> 
          <div className="company"> <FaInstagram/> Instagram</div> 
          <div className="company"> <FaTwitter/> Twitter</div> 
        </div>
       </div>
     </div>

     {/* ================= Last Container Ends ================= */}
     <footer className="footer">
  <div className="footer-item">
    <h3>About Al-Farooq Store</h3>
    <p className='abot'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In varius euismod.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque exercise distinctio molestias exercitationem. Esse voluptas nam quasi, eaque possimus et!</p>
    <div className="social-links">
      <div>
        <FaFacebook/>
      </div>
      <div>
        <FaWhatsapp/>
      </div>
      <div><FaInstagram/></div>
      <div><FaTwitter/></div>
    </div>
  </div>
  <div className="footer-item">
    <h3>Products</h3>
    <ul>
      <li>Mobiles</li>
      <li>Laptops</li>
      <li>Computer </li>
      <li>Watches</li>
      <li>Cameras</li>
      <li>Accessoies</li>

    </ul>
  </div>
  <div className="footer-item">
    <h3>Links</h3>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Accessories</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div className="footer-item">
    <h3>Contact</h3>
    <p><BiLogoGmail className='contact-icon-last'/> Email: zulqarnainc67@gmail.com</p>
    <p><BsFillTelephoneFill className='contact-icon-last'/> Phone: +92 3030128036</p>
    <p><MdLocationOn className='contact-icon-last'/> Canal Rest House, Shahdara </p>
  </div>
</footer>
<div className="patti">
  copyright ©️ Al-Farooq Store all right deserved 2023 
</div>

    </>
    
  )
}

export default Home
