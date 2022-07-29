import React from "react";

export  default class StateComponet extends React.Component{
    constructor(props){
         super(props);
         this.state ={
            count: 20,
            date: new Date()
         }
    }

    inCleik(){
        this.setState({
            count :this.state.count+=1
        })
    }

    delCleik =()=>{
        this.setState({
            count :this.state.count-=1
        })
    }  

    render(){
        return (
              <div>
                 <h2>state import </h2>
                 <h2>{this.state.count} </h2>
                 <button onClick={this.inCleik.bind(this)}>+++</button>
                 <button onClick={this.delCleik}>----</button>
                 <h2>{this.state.date.toDateString()} </h2>
                 <h2>{this.state.date.toLocaleDateString()} </h2>
                 <h2>{this.state.date.toLocaleString()} </h2>
                 <h2>{this.state.date.toLocaleTimeString()} </h2>
                 <h2>{this.state.date.toJSON()} </h2>
              </div>
        )
    
    }
}