import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../global/ProductContext';
import { FaBus, FaCar, FaExchangeAlt,  FaStar, FaStarHalfAlt, FaWarehouse,  } from 'react-icons/fa'

const SingleProduct = () => {

  const { products } = useContext(productContext);
  const { productId } = useParams();
  
  console.log('URL Product ID:', productId);
  console.log('Product Data:', products);
  
  const selectedProduct = products.find((product) => product.id === parseInt(productId));
  
  const [ image,setImage ] = useState(selectedProduct.image)
  if (!selectedProduct) {
    console.log('Product not found.');
    return <p>Product not found.</p>;
  }

  console.log('Selected Product:', selectedProduct);

  const handleImage1 = () => {
    setImage("/assets/headphones.jpg")
  }
  const handleImage2 = () => {
    setImage("/assets/accessories1.jpeg")
  }
  const handleImage3 = () => {
    setImage("/assets/computer13.jpg")
  }
  const handleImage4 = () => {
    setImage("/assets/accessories13.jpg")
  }

  return (
    <>
       <div className="single-product-container">
          <div className="single-product-sub-container">
            <div className="single-image-container">
              <div className="img-box">
                <img src={image}  className='single-image'/>
                <div className="extra-images">
                  <img src="/assets/headphones.jpg" className="extra-img" onClick={handleImage1}/>
                  <img src="/assets/accessories1.jpeg" className="extra-img" onClick={handleImage2}/>
                  <img src="/assets/computer13.jpg" className="extra-img" onClick={handleImage3}/>
                  <img src="/assets/accessories13.jpg" className="extra-img" onClick={handleImage4}/>
                </div>
              </div>
            </div>
            <div className="single-content-container">
              <div className="content-box">
                <div className="single-name">{selectedProduct.name}</div>
                <div className="ranking-stars">
                  <FaStar/> <FaStar/> <FaStar/> <FaStar/><FaStarHalfAlt/>   <span className="review">(37 custumers reviews)</span>
                </div>
                <div className="cut-price">
                  MRP : <strike>${selectedProduct.price}.00</strike>
                </div>
                <div className="deal">
                  Deal of the Day: ${selectedProduct.price - 50}.00
                </div>
                <div className="product-description">
                  {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia minus recusandae, aspernatur incidunt aliquid ipsa ea ex cumque nisi, amet modi? Eos consequatur aliquid beatae suscipit ipsa quam dolor delectus atque nisi temporibus velit voluptatibus id illum eveniet reiciendis rerum nihil consectetur deserunt, molestiae esse repellendus voluptate ipsum fugiat! Praesentium porro laboriosam aperiam modi vero assumenda sint in omnis, dolores natus suscipit recusandae earum hic  */}
                 Introducing  our modern and latest cutting-edge {selectedProduct.name} combining sleek design with 
                 unparralled performance. This {selectedProduct.name} boasts impressive
                 specifications including lightning fast processor,stunning displays and 
                 advance features.Elevate your tech expierece with this remarkabe {selectedProduct.name}, price
                 at just ${selectedProduct.price - 50}.00. Discover the feature of innovation
                 in the palm of your hand. This {selectedProduct.name} is a game
                 changer. It's a smart investment for those seeking quality and performance

                
                </div>
                <div className="easy">
                  <div className="fast-del div">
                    <FaCar />
                   <div className="text">  Free Delievery</div>
                  </div>
                  <div className="replacement div">
                    <FaExchangeAlt />
                    
                    <div className="text">30 Days Replacement</div>
                  </div>
                  <div className="store-del div">
                    <FaBus />
                    <div className="text">Farooq Delieverd</div>
                  </div>
                  <div className="warranty div">
                    <FaWarehouse />
                    <div className="text">2 years warranty</div>
                  </div>
                </div>
                <div className="availability">
                  Available: In Stock
                </div>
                <div className="brand">
                  Brand  :    Apple
                </div>
              </div>
            </div>
          </div>
       </div>
    </>
  );
};

export default SingleProduct;



// <h2> <img src={selectedProduct.image} className='single-image' /></h2>
// <h2>Name: {selectedProduct.name}</h2>
// <p>Price: {selectedProduct.price}</p>
// <p>Description: {selectedProduct.des}</p>