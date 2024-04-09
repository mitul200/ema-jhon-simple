/* eslint-disable no-unused-vars */
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   api url
  //   "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"

  // useEffect(()=>{
  //     // console.log('products', products)
  //     const storedCart = getShoppingCart();
  //     // step --1-------//
  //     for (const id in storedCart) {
  //         // step-2 get find data
  //         const addedProduct = products.find(product=> product._id === id)
  //     //    step-3 get quantity
  //         const quantity = storedCart[id]
  //         addedProduct.quantity = quantity
  //         console.log(addedProduct)
  //     }

  // },[products])

  useEffect(() => {
    const stodedCard = getShoppingCart();
    const saveCart = [];
    for (const id in stodedCard) {
      // console.log(id)
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quentity = stodedCard[id];
        addedProduct.quentity = quentity;
        saveCart.push(addedProduct);
      }

      // console.log('addedProduct', addedProduct)
    }
    setCart(saveCart);
  }, [products]);

  const handelClick = (product) => {
    let newCart = [];
    // const newCart = [...cart , product]
    const exiest = cart.find((pd) => pd._id === product._id);
    if (!exiest) {
      product.quentity = 1;
      newCart = [...cart, product];
    } else {
      exiest.quentity = exiest.quentity + 1;
      const remining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remining, exiest];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  const handelClearAll = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-Container">
      <div className="products-Container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handelClick={handelClick}
          ></Product>
        ))}
      </div>
      <div className="cart-Container">
        <Cart handelClearAll={handelClearAll} cart={cart}>
          <Link className="proceed-link" to="/orders">
            <button className="btn-Proceed">
              <span>Review Order</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
