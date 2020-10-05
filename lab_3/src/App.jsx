import React from 'react';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import store, {history} from "./store";
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Routing from "./containers/Routing";

const App = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routing/>
            </ConnectedRouter>
        </Provider>
    </ErrorBoundary>
);

export default App;
