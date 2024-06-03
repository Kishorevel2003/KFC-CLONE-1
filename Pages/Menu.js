import React from "react";
import chicken from "../Details/Chicken";
import { addToCart, deleteFromCart } from "../Store/CartSlice/CartSlice";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";

import Form from "./Form";



function Menu(){
    const cartProduct=useSelector((state)=>state.cart.cartItems)
    
     const dispatch = useDispatch();
    
     const addCart = (item) => {
        dispatch(addToCart(item))
     }
    
     const deleteCart = (item) =>{
        dispatch(deleteFromCart(item))
     }
   

   return(
    <>
        <div className="container">
            <div className="row mt-5">
              {chicken.map((item)=>(
                <div className="col-lg-4">
                <div class="card">
                <img src={item.img} class="card-img-top" alt="..."/>
                <div class="card-body">
               <h5 class="card-title">{item.name}</h5>
               <p class="card-text">{item.price}</p>
               <p class="card-text">{item.Desc}</p>
               </div>
               {cartProduct.find(items =>items.id===item.id)?
                        <button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>deleteCart(item)}>Remove</button>
                       :<button type="button" class="add2item btn btn-danger btn-sm mt-3" onClick={()=>addCart(item)}>add</button>
                }
                </div>
                </div>
                ))}
            </div>
        </div>
      <Form/>
    </>
   )
}
export default Menu;
