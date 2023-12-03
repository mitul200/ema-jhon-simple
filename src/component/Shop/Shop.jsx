import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='shop-Container'>
            <div className="products-Container">
                {
                    products.map(product =><Product
                         key={product.id}
                         product={product}
                         ></Product>)
                }
            </div>
            <div className="cart-Container">
                <h5>product summary</h5>
            </div>
        </div>
    );
};

export default Shop;