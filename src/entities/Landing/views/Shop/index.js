import React from 'react'
import './Shop.scss'
import ShopNav from "./containers/ShopNav";
const Shop = () => {
    return (
    <>
        <ShopNav/>
        <main className="shop">
            <div className="product-items d-flex ">
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="product-item card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_1280.jpg" alt="furnitureimage" />
                    <div class="furniture-selected-description">
                        <div class="selected-text d-flex justify-between flex-column align-center">
                            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto molestiae consequuntur beatae, maiores enim dicta harum aliquid eveniet>? </div>
                            <button className="btn light selected-readmore">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
        </>
    )
}

export default Shop
