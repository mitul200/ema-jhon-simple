import Cart from "../Cart/Cart";
const Orders = () => {
    return (
        <div className="shop-Container">
           <div className="products-Container">
            <h2>this is order pages</h2> 
           </div>
           <div className="cart-Container">
           <Cart cart={[]}></Cart>
           </div>
        </div>
    );
};

export default Orders;