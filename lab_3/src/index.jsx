import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/stores";
import {addedToCart, removedFromCart} from "./redux/actions";

console.log(store.getState());

store.dispatch(addedToCart({id : 1}));
store.dispatch(addedToCart({id : 2}));
store.dispatch(addedToCart({id : 3}));

console.log(store.getState());


store.dispatch(removedFromCart({id : 4}))
store.dispatch(removedFromCart({id : 1}))

console.log(store.getState());

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
