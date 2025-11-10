import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    // bind this to increment method
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={this.increment}>Click Me</button>
            <p>{this.state.count}</p>
        </div>
    );
  }
}

export default ClassComponent;
