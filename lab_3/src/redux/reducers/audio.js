import * as actions from '../../constants/actionTypes';

const initialState = {
    selectedTrack: null,
    audioInstance: null

}

const audioReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AUDIO_INSTANCE:
            return {
                selectedTrack: state.selectedTrack,
                audioInstance: action.payload
            }
        case actions.SET_SELECTED_TRACK:
            console.log("SET_SELECTED_TRACK WITH : ", action.payload, " id!!!");
            return {
                audioInstance: state.audioInstance,
                selectedTrack: action.payload
            }
        default:
            return state;
    }
}

export default audioReducer;