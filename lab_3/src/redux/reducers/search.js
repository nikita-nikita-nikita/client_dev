import * as actions from '../../constants/actionTypes';

const initialState = {
    query: ""
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_SEARCH:
            return {query: action.payload};

        default:
            return state;
    }
};

export default searchReducer;