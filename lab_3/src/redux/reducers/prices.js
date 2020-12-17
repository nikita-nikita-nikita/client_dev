import * as actions from '../../constants/actionTypes';

const initialState = [{prices: 0}, {prices: 0}, {prices: 0}, {prices: 0}];

const pricesListAddedReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.PRICES_FETCHED:
            console.log("PRICES_FETCHED WITH SUCH PAYLOAD: ", action.payload);

            return action.payload;
        default:
            return state;
    }
};

export default pricesListAddedReducer;