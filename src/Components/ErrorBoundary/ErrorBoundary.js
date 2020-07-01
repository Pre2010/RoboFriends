import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // similar to the try catch block. if it did catch anything, it'll run this block of code
    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Ooops. That's not good.</h1>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;