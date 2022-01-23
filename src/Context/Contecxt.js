import React, {createContext, useContext, useReducer} from 'react'
import faker from 'faker'
import { cartReducer, productReducer } from './Reducer';


const Cart = createContext();
faker.seed(99);

const Contecxt = ({children}) => {

   const products = [...Array(20)].map(()=>({
     id: faker.datatype.uuid(),
     name:faker.commerce.productName(),
     price:faker.commerce.price(),
     image:faker.random.image(),
     inStock:faker.random.arrayElement([0 ,3, 5, 6, 7]),
     fastDelivery:faker.datatype.boolean(),
     ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
   }));
// console.log("faker:",products);
   const [state, dispatch] = useReducer(cartReducer, {
       products : products,
       cart:[]
   });

     const [productState, productDispatch] = useReducer(productReducer, {
         byStock: false,
         byRating: 0,
     });

    return (
        <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Contecxt

export const CartState = () => {
    return useContext(Cart)
}