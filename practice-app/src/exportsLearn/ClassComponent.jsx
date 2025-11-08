import React from "react";

class ClassComponent extends React.Component{


    constructor(){
        super();
        this.state = {
            count : 0,

        }
    }

    increment(){
        this.setState(() => {
            count: this.state.count + 1,
        });
    }

    render(){
        return (
            <div>
                <button onClick={increment}>Click Me</button>
                <p>{this.state.count}</p>
            </div>
        )
    }

}

export default ClassComponent;