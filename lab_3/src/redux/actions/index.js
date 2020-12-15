import * as actions from "../../constants/actionTypes";

// newCartItem contains track id and license type {track.id, licenseType}
const addedToCart = (newCartItem) => ({
    type: actions.ADDED_TO_CART,
    payload: newCartItem
});

const removedFromCart = (id) => ({
    type: actions.REMOVED_FROM_CART,
    payload: id
});

const loggedIn = () => ({
    type: actions.LOGGED_IN
});

const purchased = (purchasedItem) => ({
    type: actions.PURCHASED,
    payload: purchasedItem
});

const beatsFetched = (newBeatList) => {
    return ({
        type: actions.BEATS_FETCHED,
        payload: newBeatList
    })
}
const pricesFetched = (pricesObj) => ({
    type: actions.PRICES_FETCHED,
    payload: pricesObj
})

const setSelectedTrack = (payload) => ({
    type: actions.SET_SELECTED_TRACK,
    payload: payload
})
const setAudioInstance = (payload) => ({
    type: actions.SET_AUDIO_INSTANCE,
    payload: payload
})

export {
    addedToCart,
    removedFromCart,
    loggedIn,
    purchased,
    beatsFetched,
    pricesFetched,
    setAudioInstance,
    setSelectedTrack
};