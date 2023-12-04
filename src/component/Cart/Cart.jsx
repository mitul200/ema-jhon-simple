import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props //steps 1//
    // console.log(cart)

    let total = 0;
    for (const product of cart) {
        // console.log(product)
         total = total + product.price
        console.log(total)
        
    }
    return (
        <div className='cart'>
            <h2>Order Summary </h2>
                <h4>product quentity : {cart.length}</h4>
                <p>Selected Items: 6</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h5>Grand Total: $1559</h5>
        </div>
    );
};

export default Cart;