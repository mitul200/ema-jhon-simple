import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props //steps 1//
    console.log(cart)

    // total added ----
    let total = 0;
    let totalShipping = 0
    for (const product of cart) {
        // console.log(product)
         total = total + product.price
         totalShipping = totalShipping + product.shipping
        // console.log(totalShipping)  
    }
    // tax total -----
    const tax = total*7/100

    const grandTotal = tax + total + totalShipping

    return (
        <div className='cart'>
            <h2>Order Summary </h2>
                <h4>product quentity : {cart.length}</h4>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: {totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;