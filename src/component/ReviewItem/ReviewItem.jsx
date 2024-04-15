import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewItem.css";
// eslint-disable-next-line react/prop-types
const ReviewItem = ({ product, handelRemoveFromCart }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, img, price, name, quantity } = product;
  console.log(quantity);
  return (
    <div className="review-items">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          price : <span className="org-text">{price}</span>
        </p>
        <p>
          Order Quentity : <span className="org-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handelRemoveFromCart(_id)} className="btn-delets">
        <FontAwesomeIcon
          className="delet-icon"
          icon={faTrashAlt}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ReviewItem;
