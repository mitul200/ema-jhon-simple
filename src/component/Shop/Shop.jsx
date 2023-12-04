import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    },[])

    const handelClick =(product)=>{
        const newCart = [...cart , product]
        setCart(newCart)
        addToDb(product.id)

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;