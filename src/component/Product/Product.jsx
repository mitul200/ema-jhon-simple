
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    // eslint-disable-next-line react/prop-types
    const {price,img,name,ratings,seller} = props.product
    const handelClick = props.handelClick

    
    return (
        <div className='product'>
          <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='products-name'> {name}</h6>
                <p>price : ${price}</p>
                <p>Manufacturer $ : {seller}</p>
                <p>ratings : ${ratings} star</p>
            </div>
            <button onClick={()=>handelClick(props.product)} className="btn-cart">
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;