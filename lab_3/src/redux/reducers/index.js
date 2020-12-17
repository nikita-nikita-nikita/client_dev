import {combineReducers} from "redux";
import shoppingCart from './cart';
import beatList from "./beat-list";
import pricesList from "./prices";
import customer from "./customer";
import audio from './audio';
import search from './search';

const initialState = {
    audio: {
        selectedTrack: null,
        audioInstance: null,
    },
    beatList: {
        beatList: []
    },
    shoppingCart: {
        cart: [],
        totalPrice: 0
    },
    customer: {
        isLoggedIn: false,
        purchasedList: []
    },
    prices: {
        mp3Lease: 0,
        wavLease: 0,
        trackOutLease: 0,
        unlimitedLease: 0
    },
    search: {
        query: ""
    }
};


const rootReducer = combineReducers({
    shoppingCart,
    pricesList,
    beatList,
    customer,
    audio,
    search
});

export default rootReducer;
