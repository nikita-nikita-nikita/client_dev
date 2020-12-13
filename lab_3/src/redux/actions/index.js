import * as actions from "../actionTypes";

const addedToCart = (track) => ({
    type : actions.ADDED_TO_CART,
    payload : track
});

const removedFromCart = (track) => ({
    type : actions.REMOVED_FROM_CART,
    payload : track
});

export {addedToCart, removedFromCart};