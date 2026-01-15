import { Component } from "react";

class ErrorBoundry extends Component{

    constructor(props){
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDrivedStateFromError(error){
        return { hasError: false, error: error }
    }

    render(){
        if(this.state.hasError){
            return <h2>Something went wrong</h2>
        }

        return this.props.children;
    }

}