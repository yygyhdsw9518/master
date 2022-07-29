import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import App from './App';

//document.getElementById('root')  获取要插入的容器
//jsx语法 ：<h1>zsw</h1>
//const react = " hello";

// function tick(){
//     const element =(
//         <div>
//             <h1>sfdsfdsfds</h1>
//             <h2>it is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);


ReactDOM.render(<App />,document.getElementById('root'));



