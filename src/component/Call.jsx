import React from "react"
//import { Button } from 'antd';
import "../css/allcss.css"
export default class Call extends React.Component{
    callphone(){    
        window.location.href = "tel:023-85287555";
    }
    render(){
        return(
           // <Button className={"callphone"} onClick={this.callphone} type="primary" block>Primary</Button>
            <button className={"callphone"} onClick={this.callphone}>联系我们</button>
            //<a href={"tel:13002300051"}>联系我们</a>
        )
    }
}