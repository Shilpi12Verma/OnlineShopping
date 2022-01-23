import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { CartState } from '../Context/Contecxt'
import './Filters.css'

const Filters = () => {

    const {
      productState : { byStock, byFastDelivery, sort, byRating,searchQuery }, 
       productDispatch, } = CartState();
      //  console.log(byStock, byFastDelivery, sort, ,searchQuery);

        return (
        <div className='filter'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check inline label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>
               productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
               })
            }
            checked={sort === "lowToHigh" ? true : false}
            /> 
         </span>

         <span>
            <Form.Check inline label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>
               productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
               })
            }
            checked={sort === "highToLow" ? true : false}
            />
         </span>

         <span>
            <Form.Check inline label="Include Out Of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>
               productDispatch({
                  type: "FILTER_BY_STOCK",
               })
            }
            checked={byStock}
            />
         </span>
            <Button variant="light"
             onClick={()=>
               productDispatch({
                  type: "CLEAR_FILTER",
               })}>
               Clear Filter </Button>
        </div>
    )
}

export default Filters