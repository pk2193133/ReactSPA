import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:props.value||0
        };
    

    this.decrement=this.decrement.bind(this);
    this.increment=this.increment.bind(this);

    }

    decrement(){
        this.setState({
            count:this.state.count-1
        });
    }

    increment(){
        this.setState({
            count:this.state.count+1
        });
    }

    render(){
       return React.createElement("div",
            null,
            React.createElement("h1",null,`count:${this.state.count}`),
            React.createElement("button",
                {"onClick":this.decrement},
                "decrement"
            ),
            React.createElement("button",
                {"onClick":this.increment},
                "increment"
            )
        );
    }
}

export default Counter;