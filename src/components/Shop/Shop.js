import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;