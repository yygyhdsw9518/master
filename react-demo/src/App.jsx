import React from 'react';
// import Home from './Home';
// import MyNav from './MyNav';
// import Statecomponet from './StateComponet';
import ComponentLife from './ComponentLife';

//用类的形式创建组件
class App extends React.Component{
   
    constructor(props){
       super(props);
       this.state ={
            title :"文本"
       }
    }

    updMount = (date) =>{
       this.setState({
         title :  date
       })
    }

    updMount2 = (date) =>{
        this.updMount('sfdfdsfd');
     }

    //渲染函数
    render(){

        // const aa1 = ["1","2","3"];
        // const aa2 = ["11","22","33"];

        return (<div>
              {/* <h1><input ></input></h1>
              <h1><button>查询</button></h1>
              <Home title ="导航"/>
              <MyNav nav = {aa1} />

              <MyNav nav = {aa2}/>
              <Statecomponet /> */}
            <ComponentLife name = {this.state.title}  updMount = {this.updMount}/>
            <button onClick={this.updMount2}>修改</button>

            </div>
            )
    }
}

export  default App;