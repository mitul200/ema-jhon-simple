import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {price,img,id,name,quantity,ratings,ratingsCount,shipping,stock,seller} = props.product
    return (
        <div className='product'>
          <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='products-name'> {name}</h6>
                <p>price : ${price}</p>
                <p>Manufacturer $ : {seller}</p>
                <p>ratings : ${ratings} star</p>
            </div>
            <button className="btn-cart">Add to Cart</button>
        </div>
    );
};

export default Product;