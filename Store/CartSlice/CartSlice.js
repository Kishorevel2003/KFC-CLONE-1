import { createSlice } from '@reduxjs/toolkit';

const storedItems = localStorage.getItem('cartItems');
//localStorage is a web storage API that allows you to store data as key-value pairs in a web browser. 

const initialState = {
    cartItems: storedItems ? JSON.parse(storedItems) : []
};//if the stored item exist succesfully parsed or does not contain cart items or 
//parsing fails, default to an empty array.
//Converting the JSON string into a JavaScript array is necessary to manipulate the data like map,push...

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {//state contains the current items in the cart 
            const newItem = action.payload;
            const existingItem = state.cartItems.find(items => items.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    img: newItem.img,
                    price: newItem.price,
                    quantity: newItem.quantity
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(items => items.id   !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCart: (state) => {
            state.cartItems = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }
});

export const { addToCart, deleteFromCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;// makes the reducer available for import in other modules.