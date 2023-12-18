import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoder = async() =>{
    const lodedProducts = await fetch('/src/fakeData/products.json')
    const products = await lodedProducts.json()

    const storedCard = getShoppingCart()
    const savedCart = [];
    for (const id in storedCard){
        const addedproducts = products.find((pd)=> pd.id === id)
        if(addedproducts){
            const quentity = storedCard[id]
           addedproducts.quentity = quentity
           savedCart.push(addedproducts)
           
        }
        
    }
    return savedCart
}

export default cartProductsLoder;