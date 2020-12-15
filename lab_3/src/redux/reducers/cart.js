import * as actions from '../../constants/actionTypes';

const initialState = {
    cart: [],
    totalPrice: 0
}

// returns updated cart with new item in there
const addToCart = (cartItems, newItem) => {
    const trackIndex = cartItems.findIndex(({track}) => track.id === newItem.track.id);
    console.log("ADDDED TO CART", newItem.track.id)
    if (trackIndex === -1)
        return [
            ...cartItems,
            newItem
        ]

    return [
        ...cartItems.slice(0, trackIndex),
        newItem,
        ...cartItems.slice(trackIndex + 1)
    ]
}

const removeFromCart = (cartItems, itemId) => {
    const trackIndex = cartItems.findIndex(({track}) => track.id === itemId);

    if (trackIndex === -1)
        return cartItems;

    return [
        ...cartItems.slice(0, trackIndex),
        ...cartItems.slice(trackIndex + 1)
    ]
}

const calculateTotalSum = (shoppingCart) => {
    return shoppingCart.cart.reduce(
        ({accumulator}, {currentValue}) => accumulator + currentValue, 0
    );
}

const cartReducer = (state = initialState, action) => {

    const {cart} = state;

    switch (action.type) {
        case actions.ADDED_TO_CART:
            return {
                cart: addToCart(cart, action.payload, action.payload.id),
                totalPrice: calculateTotalSum(state)
            }
        case actions.REMOVED_FROM_CART:

            return {
                cart: removeFromCart(cart, action.payload),
                totalPrice: calculateTotalSum(state)
            }

        default:
            return state;
    }
}

export default cartReducer;