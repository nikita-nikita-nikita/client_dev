import React, {Component} from "react";

export default class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {error:false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) return <h1>Oops, something got wrong</h1>;
        return this.props.children;
    }
}
