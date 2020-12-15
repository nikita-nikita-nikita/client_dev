import React from 'react';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Routing from "./containers/Routing";

const App = () => {

    return (
        <ErrorBoundary>
            <Routing/>
        </ErrorBoundary>
    )
};

export default App;
