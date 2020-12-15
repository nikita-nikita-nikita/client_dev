import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/stores";
import {addedToCart,
    removedFromCart,
    loggedIn,
    purchased,
    beatsFetched,
    pricesFetched,
    setAudioInstance,
    setSelectedTrack} from './redux/actions';
import {Provider} from 'react-redux';



// store.dispatch(addedToCart({id: 5, licenseType: "bibamp3"}));
// store.dispatch(addedToCart({id: 6, licenseType: "chlenmp3"}));
// store.dispatch(addedToCart({id: 7, licenseType: "chlenmp3"}));
//
// store.dispatch(removedFromCart(5));
//
// store.dispatch(addedToCart({id: 10, licenseType: "chlenmp3"}));
//
// store.dispatch(removedFromCart(6));

// store.dispatch(beatsFetched([{id: 5}, {id: 6}, {id: 7}]));

// store.dispatch(removedFromCart(4));


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
