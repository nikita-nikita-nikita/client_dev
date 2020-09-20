import React from 'react';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import store, {history} from "./store";
import { Provider } from 'react-redux';
import {ConnectedRouter} from "connected-react-router";

const App = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <h1>Something got wrong</h1>
            </ConnectedRouter>
        </Provider>
    </ErrorBoundary>
);

export default App;
