import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";


const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  console.log(cart);
  const handelRemoveFromCart = (id) => {
    const remainig = cart.filter((product) => product.id !== id);
    setCart(remainig);
    removeFromDb(id);
  };

  const handelClearAll = () => {
    setCart([]);
    deleteShoppingCart()
  };

  return (
    <div className="shop-Container">
      <div className="review-Container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handelRemoveFromCart={handelRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-Container">
        <Cart handelClearAll={handelClearAll} cart={cart}>
           <Link className="proceed-link" to='/checkout'>
            <button className="btn-Proceed">
                <span>Proceed Checkout</span>
                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                </button>
           </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
