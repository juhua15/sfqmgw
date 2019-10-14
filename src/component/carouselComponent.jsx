import { Carousel } from 'antd';
import React from "react"
import 'antd/lib/carousel/style'
import KDYK from '../img/kdyk.jpg'
import KRK from '../img/krk.jpg'
import KMK from '../img/kmk.jpg' 
export default class antdCarousel extends React.Component{
   
    render(){
        return (
          <Carousel  autoplay dotPosition={"bottom"}>
            <div>
              <img src={KDYK} alt={"KDYK"}></img>
              <span>1</span>
            </div>
            <div>
            <img src={KRK} alt={"KRK"}></img>
            <span>2</span>
            </div>
            <div>
            <img src={KMK} alt={"KMK"}></img>
            <span>3</span>
            </div>
          </Carousel>
        );
            
        
    }
}

