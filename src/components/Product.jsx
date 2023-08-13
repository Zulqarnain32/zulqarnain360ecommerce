
import React, { useContext, useState } from 'react';
import { productContext } from '../global/ProductContext';
import { Cartcontext } from '../global/CartContext'
import  { Link,useNavigate } from "react-router-dom"

const Product = () => {

 const navigate = useNavigate()

  const { products } = useContext(productContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ activeList,setActiveList ] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleList = () => {
     setActiveList(true)
  }
  const handleRow = () => {
    setActiveList(false)
  }

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(selectedCategory, query);
  };

  const filterProducts = (category, query) => {
    const filtered = products.filter((product) => {
      const productNameMatches = product.name.toLowerCase().includes(query.toLowerCase());
      const categoryMatches = !category || product.category === category;
      return productNameMatches && categoryMatches;
    });
    setFilteredProducts(filtered);
  };

  const showAllProducts = () => {
    setSelectedCategory(null);
    filterProducts(null, searchQuery);
  };

  const showMobileProducts = () => {
    setSelectedCategory('mobile');
    filterProducts('mobile', searchQuery);
  };

  const showLaptopProducts = () => {
    setSelectedCategory('laptop');
    filterProducts('laptop', searchQuery);
  };

  const showComputerProducts = () => {
    setSelectedCategory('computer');
    filterProducts('computer', searchQuery);
  };

  const showWatchProducts = () => {
    setSelectedCategory('watch');
    filterProducts('watch', searchQuery);
  };
  const showAccessoriesProducts = () => {
    setSelectedCategory('accessories');
    filterProducts('accessories', searchQuery);
  };
  

  const productList = filteredProducts !== null ? filteredProducts : products;
  let lengthofproduct = productList.length;
  const {dispatch} = useContext(Cartcontext)

  
  // const showProductDetail = (product) => {
  //   dispatch({ type: 'SHOW_DETAIL', product });
  //   navigate('/productdetail');
  // };








  const sortedProducts = [...productList];
   // Make a copy of filtered products to not mutate the original array
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  // Sort products based on the selected sort option
  if (sortOption === 'a-z') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'z-a') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
 const handleComapnies = () => {
  alert("Sorry! This function is not developed yet")
 }
  return (
    <>
      <div className="product-container">
        <div className="product-sub-container">
        {showSuccessMessage && (
  <div className="success-message">
    Item has been added to the cart.
  </div>
)}
          {/*========== the above div have 2 divs =========== */}
          {/*================== first box start================ */}
          <div className="product-searches">
            <div className="search-side">
              <input
                type="text"
                placeholder="search here "
                className="searchproduct"
                value={searchQuery}
                onChange={handleSearch}
              />
              <p className="dark dark1">Category</p>
              <div className="acessories-side">
                <button className="accessory" onClick={showAllProducts}>
                  All
                </button>
                <button className="accessory" onClick={showMobileProducts}>
                  Mobile
                </button>
                <button className="accessory" onClick={showLaptopProducts}>
                  Laptop
                </button>
                <button className="accessory" onClick={showComputerProducts}>
                  Computer
                </button>
                <button className="accessory" onClick={showWatchProducts}>
                  Watches
                </button>
                <button className="accessory" onClick={showAccessoriesProducts}>
                  Accessories
                </button>
              </div>
              <p className="company-side dark">Company</p>
              <select name="" id="" className="select" onChange={handleComapnies}>
                <option value="all">All</option>
                <option value="huawei">Huawei</option>
                <option value="iphone">Iphone</option>
                <option value="hp">Hp</option>
                <option value="dell">Dell</option>
              </select>
              <p className="dark">Colors</p>
              <div className="color-side">
                <div className="color-name red"></div>
                <div className="color-name blue"></div>
                <div className="color-name white"></div>
                <div className="color-name green"></div>
                <div className="color-name black"></div>
              </div>
            </div>
          </div>

          <input
                type="text"
                placeholder="search here "
                className="searchproduct searchtwo"
                value={searchQuery}
                onChange={handleSearch}
          />
                 

          {/* ========== Second box Start ============= */}
        
          <div className="dynamic-products">
            { lengthofproduct == 0 ? (<h1 className='not-found'>No Product Found</h1>) : "" }
            <div className="product-heading">
              <div className="how-to-list">
                <button className="list" onClick={handleList}>list</button>
                <button className="row" onClick={handleRow}>row</button>
              </div>
              <div className="total-products">{lengthofproduct} Total Products</div>
              <div className="a-z">
                {/* <select name="" id="">
                  <option value="acending">Price(a-z)</option>
                  <option value="decending">Price(z-a)</option>
                </select> */}
                  <select
          name="sortOption"
          id="sortOption"
          onChange={handleSortChange}
          value={sortOption}
          className='searchbox1'
        >
          <option value="default">Default</option>
          <option value="a-z">Ascending</option>
          <option value="z-a">Descending</option>
        </select>
              </div>
            </div>
            {/* =========== Products below ============= */}

            <div className= {activeList ? "maketheelist":"product-page-products"} style={{ marginTop: '50px' }}>
              {/* {productList.map((product) => ( */}
              {sortedProducts.map((product) => (
                
                
                <div className="home-item-box kmaal" key={product.id}>
                  <img src={product.image} alt="" className="pange" />
                  <div className="item-info">
                    <div className="item-name">{product.name}</div>
                  
                    <div className="item-price">${product.price}.00</div>
                  </div>
                 
                     <div className="buy-detail">
            
            {/* <button
              className="purchase"
              onClick={() => dispatch({ type: 'ADD_TO_CART', product })}
            >
              Buy Now
            </button> */}
            <button
  className="purchase"
  onClick={() => {
    dispatch({ type: 'ADD_TO_CART', product });
    setShowSuccessMessage(true); // Show the success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the success message after a delay
    }, 1000); // You can adjust the delay (in milliseconds) as needed
  }}
>
  Buy Now
</button>
            <button className='purchase detailprod'>
                    <Link to={`/single-product/${product.id}`} key={product.id} className='detailproduct'> product detail </Link> 
            </button>
          </div>
                 
                </div>
                
               
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

