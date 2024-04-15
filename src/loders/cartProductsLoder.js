import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoder = async () => {
  const storedCard = getShoppingCart();
  const ids = Object.keys(storedCard);
  console.log(ids);
  const lodedProducts = await fetch(`http://localhost:5000/productsByIds`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await lodedProducts.json();

  console.log("products by ids", products);
  // const storedCard = getShoppingCart();
  const savedCart = [];
  for (const id in storedCard) {
    const addedproducts = products.find((pd) => pd._id === id);
    if (addedproducts) {
      const quentity = storedCard[id];
      addedproducts.quentity = quentity;
      savedCart.push(addedproducts);
    }
  }
  return savedCart;
};

export default cartProductsLoder;
