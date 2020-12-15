import * as actions from '../../constants/actionTypes';

const initialState = {
    beatList: []
}

const beatListAddedReducer = (state = initialState, action) => {


    switch (action.type) {
        case actions.BEATS_FETCHED:
            console.log("BEATS FETCHED REDUCER!");
            return {
                beatList: action.payload
            }
        default:
            return state;
    }
};

export default beatListAddedReducer;