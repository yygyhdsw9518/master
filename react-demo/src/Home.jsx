import React from "react";

export default class Home extends React.Component{

    render(){

        return (

            <h1>hello: {this.props.title}</h1>
        )
        
    };
}