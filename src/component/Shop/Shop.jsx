import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    const handelClick =(product)=>{
        const newCart = [...cart , product]
        setCart(newCart)

    }

    return (
        <div className='shop-Container'>
            <div className="products-Container">
                {
                    products.map(product =><Product
                         key={product.id}
                         product={product}
                         handelClick={handelClick}
                         ></Product>)
                }
            </div>
            <div className="cart-Container">
                <h2>Order Summary </h2>
                <h4>product quentity : {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;