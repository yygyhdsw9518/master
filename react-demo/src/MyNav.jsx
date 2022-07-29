import React from "react";

//props  不能被修改
export default class MyNav extends React.Component{

    render(){

       console.log(this.props.nav);

        return(
            <div>
                <ul>
                    {
                        this.props.nav.map((element,index) =>{
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}