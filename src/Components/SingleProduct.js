import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Contecxt'
import Rating from './Rating'
import './SingleProduct.css'


const SingleProduct = ({prod}) => {

    const {
        state : { cart },
        dispatch,
    } = CartState();
    // console.log("cart",cart);

    return (
        <div className='singleprod'>
         <Card>
             <Card.Img variant="top" src={prod.image} alt={prod.name}/>
             <Card.Body>
                 <Card.Title>{prod.name}</Card.Title>
                 <Card.Subtitle style={{paddingBottom: 10}}>
                  <span>Rs.{prod.price.split(".")[0]}</span>
                  {prod.fastDelivery ? (
                      <div>Fast Delivery</div>
                  ) : (
                      <div>4 days delivery</div>
                  )}
                  <Rating rating={prod.ratings}/>
                 </Card.Subtitle>
                 {
                     cart.some(p=>p.id===prod.id)?(
                        <Button onClick={() => {
                        dispatch({
                         type:"REMOVE_FROM_CART",
                         payload:prod,
                     });
                 }} variant='danger'> Remove from Cart </Button>
                     ):(
                       <Button onClick={() => {
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:prod,
                        });
                 }} disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"} </Button>
                     )
                 }

             </Card.Body>
         </Card>
        </div>
    )
}

export default SingleProduct
