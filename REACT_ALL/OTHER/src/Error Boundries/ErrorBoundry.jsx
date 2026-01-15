import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundry caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            border: "1px solid red",
            background: "pink",
            padding: "20px",
          }}
        >
          <h2>OOps! Something went wrong!</h2>
          <p>{this.props.fallback}</p>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
