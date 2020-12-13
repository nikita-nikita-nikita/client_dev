import * as actions from "../actionTypes";

let initialState = {
    cart: [],
    isLoggedIn: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.ADDED_TO_CART:
            return ({
                    cart: [
                        ...state.cart,
                        action.payload
                    ],
                    isLoggedIn: state.isLoggedIn
                }
            )
        case actions.REMOVED_FROM_CART:
            let trackIndex = state.cart.findIndex(({id}) => id === action.payload.id);
            console.log(state.cart.slice(0, trackIndex), "HERE");
            if (trackIndex === -1) {
                return ({
                        cart: state.cart,
                        isLoggedIn: state.isLoggedIn
                    }
                )
            }
            return ({
                    cart: [
                        ...state.cart.slice(0, trackIndex),
                        ...state.cart.slice(trackIndex + 1, state.cart.length)
                    ],
                    isLoggedIn: state.isLoggedIn
                }
            )
        case actions.LOGGED_IN:
            return ({
                cart: state.cart,
                isLoggedIn: !state.isLoggedIn
            })
        default:
            return state;
    }
};

export default reducer;
