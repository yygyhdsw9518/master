import React from "react";

export  default class ComponentLife extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        count : 10
    }

    
  }

  componentWillMount(){
     console.log("在组件渲染之前 执行componentWillMount");
  };
  componentDidMount(){
    console.log("在组件渲染后执行componentDidMount");
  }

  shouldComponentUpdate(){

    console.log("返回true 代表允许改变，false 代表不允许shouldComponentUpdate");
    return  true;

  }
  componentWillUpdate(){
    console.log("数据在改变之前执行执行(数据state ,props)componentWillUpdate");
  }

  componentDidUpdate(){
    console.log("数据在改变之后执行(数据state ,props)componentDidUpdate");
  }

  componentWillReceiveProps(){
    console.log("props 发生改变执行componentWillReceiveProps");
  }

  componentWillUnmount(){
    console.log("组件卸载前执行componentWillUnmount");
  }

  addMount = () =>{
      this.setState({
         count : this.state.count +=1
      })
  }
  updMount1 = () =>{
    this.props.updMount('水电费第三方');
   
 }
  

  render(){

       const {count} = this.state;
       return(
            <div>
            <h1>were</h1>
             <h2>
                <li>{count} : {this.props.name}</li>
             </h2>
             <button onClick={this.addMount}>+++</button>
             <button onClick={this.updMount1}>修改title</button>
            
            </div>
       )
  }
}