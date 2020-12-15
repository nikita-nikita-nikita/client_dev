import * as actions from '../../constants/actionTypes';

const initialState = {
    mp3Lease: 0,
    wavLease: 0,
    trackOutLease: 0,
    unlimitedLease: 0
}

const pricesListAddedReducer = (state = initialState, action) => {


    switch (action.type) {
        case actions.PRICES_FETCHED:
            return action.payload;
        default:
            return state;
    }
};

export default pricesListAddedReducer;