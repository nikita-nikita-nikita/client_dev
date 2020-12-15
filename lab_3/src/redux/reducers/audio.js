import * as actions from '../../constants/actionTypes';

const initialState = {
    audioInstance: null,
    selectedTrack: null
}

const audioReducer = (state = initialState, action) => {


    switch (action.type) {
        case actions.SET_AUDIO_INSTANCE:
            return {
                ...state,
                audioInstance: action.payload
            }
        case actions.SET_SELECTED_TRACK:
            return {
                ...state,
                selectedTrack: action.payload
            }
        default:
            return state;
    }
}

export default audioReducer;