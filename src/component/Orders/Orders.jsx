import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";
const Orders = () => {


    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)
    console.log(cart)
    const handelRemoveFromCart =(id)=>{
        const remainig = cart.filter(product => product.id !== id)
        setCart(remainig)
        removeFromDb(id)
    }

    return (
        <div className="shop-Container">
           <div className="review-Container">
            {
               cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handelRemoveFromCart={handelRemoveFromCart}
                ></ReviewItem>)
            } 
           </div>
           <div className="cart-Container">
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;