import React from 'react'

const UniStyleEventShop = () => {
  return (
    <section className="container">
    <form>
        <i className="fas fa-search"></i>
        <input type="text" name="" id="search-item" placeholder="Search products"  onkeyup="searchProducts()" />
    </form>

    <div className="product-list" id="product-list">
           <div className="product">
               {/* <img src="Shop images/images.jpeg" alt=""> */}
               <div className="p-details">
                 <h2>HCI  t-shirts</h2> 
                 <h3>€15 </h3>
               </div>
            </div>    

            <div className="product">
                {/* <img src="Shop images/sneakers.webp" alt=""> */}
                <div class="p-details">
                  <h2>HCI sneakers</h2> 
                  <h3>€25 </h3>
                </div>
            </div>

            <div className="product">
                {/* <img src="Shop images/cap.jpg" alt=""> */}
                <div className="p-details">
                  <h2>HCI caps</h2> 
                  <h3>€5 </h3>
                </div>
            </div>

            <div className="product">
                {/* <img src="Shop images/watch.jpeg" alt=""> */}
                <div className="p-details">
                  <h2>HCI watch</h2> 
                  <h3>€15 </h3>
                </div>
            </div>

            <div className="product">
                {/* <img src="Shop images/laptop cover.jpeg" alt=""> */}
                <div className="p-details">
                  <h2>HCI lap top cover</h2> 
                  <h3>€30 </h3>
                </div>
            </div>
    </div>
</section>
  )
}

export default UniStyleEventShop
