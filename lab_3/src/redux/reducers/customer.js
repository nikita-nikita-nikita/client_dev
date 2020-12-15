import * as actions from '../../constants/actionTypes';

const initialState = {
    isLoggedIn: false,
    purchasedList: []
}

// new item contains id of the track and
const addToPurchased = (purchasedItems, newItem) => {
    const trackIndex = purchasedItems.findIndex(({id}) => id === newItem.id);

    if (trackIndex === -1) {
        return [
            ...purchasedItems,
            newItem
        ]
    }

    return [
        ...purchasedItems.slice(0, trackIndex),
        newItem,
        ...purchasedItems.slice(trackIndex + 1)
    ]
}

const customerReducer = (state = initialState, action) => {

    const {purchasedList} = state;

    switch (action.type) {
        case actions.PURCHASED:
            return {
                ...state,
                purchasedList: addToPurchased(purchasedList, action.payload)
            }
        case actions.LOGGED_IN:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        default:
            return state;
    }
}

export default customerReducer;