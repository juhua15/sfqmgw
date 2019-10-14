import React, { Component } from 'react';
import { Row, Col ,Carousel} from 'antd';
// 主KV
import KDYK from '../imgs/kdyk.jpg'
import KRK from '../imgs/krk.jpg'
import KMK from '../imgs/kmk.jpg'


export default class HeadCarousel extends Component {
    state={
        imgs:[{id:1, source:KRK,alt:"科洛克",urls:"https://www.skoda.com.cn/karoq/index.html"},
        {id:2, source:KDYK,alt:"柯迪亚克",urls:"https://www.skoda.com.cn/kodiaq/index.html"},
        {id:3, source:KMK,alt:"科米克",urls:"https://www.skoda.com.cn/kamiq/index.html"}
    ]
    }
    onclick(){
        console.log();
    }
    render() {
        return (
            <Row >
                <Col xs={{ span: 12, offset: 2 }} sm={{ span: 12, offset: 6 }} md={{ span: 18, offset: 3 }} lg={{ span:20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <Carousel autoplay effect="fade" dotPosition="bottom">
                    {
                       this.state.imgs.map( (item)=><a href={item.urls} key={item.id}> <img width={"100%"} src={item.source} key={item.id} alt={item.alt}></img></a>) 
                    }                          
                </Carousel>
                </Col>
            </Row>
        );
    }
}

