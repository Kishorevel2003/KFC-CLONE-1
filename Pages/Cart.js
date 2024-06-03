import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../Store/CartSlice/CartSlice';



function Cart() {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
    };

    return (
        <>
            <div>
                {cartProducts.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.img} alt='' />
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                        <button className='btn' onClick={() => deleteCart(item)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart;