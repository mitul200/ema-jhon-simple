import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
const Orders = () => {

    const cart = useLoaderData()
    console.log(cart)

    return (
        <div className="shop-Container">
           <div className="review-Container">
            {
                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
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