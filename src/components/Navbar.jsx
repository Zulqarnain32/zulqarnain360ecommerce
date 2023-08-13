import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu} from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import { Cartcontext } from '../global/CartContext'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const { quantity } = useContext(Cartcontext)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  if(showNavbar){
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/"><img src="/assets/nav.png" alt="" className = "navlogo" /></Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>

        <div className={`nav-elements  ${showNavbar && 'active'}`}>
       
          
          <ul>
            
            <li className='cross-link'>
              <Link to="/" onClick={() => setShowNavbar(false)}>✖️</Link>
            </li>

            <li className='home-link'>
              <Link to="/" onClick={() => setShowNavbar(false)}>Home</Link>
            </li>
           
            <li>
              <Link to="/products" onClick={() => setShowNavbar(false)}>Products</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowNavbar(false)}>Contact</Link>
            </li>
            {/* <li className='check'>
              <Link to="/cart" className='cart' onClick={() => setShowNavbar(false)}>
                <FaShoppingCart className='cart-icon'/>
                <span className='initial-quantity'>3</span>
              </Link>
            </li> */}
           
            
          </ul>

        </div>
           
      </div>
           <li className='checked'>
              <Link to="/cart" className='cart' onClick={() => setShowNavbar(false)}>
                <FaShoppingCart className='cart-icon'/>
                <span className='initial-quantity'>{quantity}</span>
              </Link>
            </li>
    </nav>
  )
}

export default Navbar