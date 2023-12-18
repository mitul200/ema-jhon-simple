import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line react/prop-types
const ReviewItem = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {img,price,name,quantity} = product
    return (
        <div className="review-items">
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>price : <span className='org-text'>{price}</span></p>
                <p>Order Quentity : <span className='org-text'>{quantity}</span></p>
            </div>
            <button className='btn-delets'>
            <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;