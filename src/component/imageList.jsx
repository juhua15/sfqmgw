import React, { Component } from 'react';
import { Row, Col } from 'antd';
//价格
import PGT from "../imgs/carprice/cars-kodiaqgt.png"
import PSuperb from "../imgs/carprice/car_superb.png"
import PRapid from "../imgs/carprice/car_rapid.png"
import PKodiaq from "../imgs/carprice/car_kodiaq.png"
import PKaroq from "../imgs/carprice/car_karoq.png"
import PKamiq from "../imgs/carprice/car_kamiq.png"
import POctavia from "../imgs/carprice/car_octavia.png"
import POctaviaCombi from "../imgs/carprice/car_octaviacombi.png"

export default class ImageList extends Component {
    state={
        imgs:[{id:1, source:POctavia,alt:"明锐",urls:"https://www.skoda.com.cn/karoq/index.html"},
        {id:2, source:PGT,alt:"柯迪亚克GT",urls:"https://www.skoda.com.cn/kodiaq/index.html"},
        {id:3, source:PSuperb,alt:"速派 ",urls:"https://www.skoda.com.cn/kamiq/index.html"},
        {id:4, source:PRapid,alt:"昕锐",urls:"https://www.skoda.com.cn/karoq/index.html"},
        {id:5, source:PKodiaq,alt:"柯迪亚克",urls:"https://www.skoda.com.cn/kodiaq/index.html"},
        {id:6, source:PKamiq,alt:"科米克",urls:"https://www.skoda.com.cn/kamiq/index.html"},
        {id:7, source:PKaroq,alt:"科珞克",urls:"https://www.skoda.com.cn/kamiq/index.html"},
        {id:8, source:POctaviaCombi,alt:"明旅",urls:"https://www.skoda.com.cn/kamiq/index.html"}
    ]
    }
    
    onclick(){
        console.log();
    }
    render() {
        const imgs = this.state.imgs
        return (
            <div style={{margin:"20px 0 0 0"}}>
            {/* {imgs.map((item)=>(
                <Row gutter={18}>
               <Col  xs={{ span:6, offset: 2 }} sm={{ span: 6, offset: 6 }} md={{ span: 9, offset: 3 }} lg={{ span:10, offset: 2 }} xl={{ span: 6, offset: 6} }>
                   <img  width="400px" src={item.source} alt={item.alt} key={item.id}></img>
                   <div key={item.id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4390 / 1781 / 1606 / 2610
                   </div>                 
               </Col>
               <Col span={12}>
                   <img width="400px" src={item.source} alt={item.alt} key={item.id}></img>
                   <div key={item.id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4390 / 1781 / 1606 / 2610
                   </div>                  
               </Col>
            </Row>  
            )       
            )} */}
             <Row gutter={18}>
               <Col  xs={{ span:6, offset: 2 }} sm={{ span: 6, offset: 6 }} md={{ span: 9, offset: 3 }} lg={{ span:10, offset: 2 }} xl={{ span: 6, offset: 6} }>
                   <img  width="400px" src={imgs[0].source} alt={imgs[0].alt} key={imgs[0].id}></img>
                   <div key={imgs[0].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4675 / 1814 / 1460 / 2686
                   </div>                 
               </Col>
               <Col span={12}>
                   <img width="400px" src={imgs[1].source} alt={imgs[1].alt} key={imgs[1].id}></img>
                   <div key={imgs[1].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4634 / 1883 / 1649 / 2791
                   </div>                  
               </Col>
            </Row>  
            <Row gutter={18}>
               <Col  xs={{ span:6, offset: 2 }} sm={{ span: 6, offset: 6 }} md={{ span: 9, offset: 3 }} lg={{ span:10, offset: 2 }} xl={{ span: 6, offset: 6} }>
                   <img  width="400px" src={imgs[2].source} alt={imgs[2].alt} key={imgs[2].id}></img>
                   <div key={imgs[2].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4869 / 1865 / 1489 / 2841
                   </div>                 
               </Col>
               <Col span={12}>
                   <img width="400px" src={imgs[3   ].source} alt={imgs[3].alt} key={imgs[3].id}></img>
                   <div key={imgs[3].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4512 / 1706 / 1469 / 2603
                   </div>                  
               </Col>
            </Row>  
            <Row gutter={18}>
               <Col  xs={{ span:6, offset: 2 }} sm={{ span: 6, offset: 6 }} md={{ span: 9, offset: 3 }} lg={{ span:10, offset: 2 }} xl={{ span: 6, offset: 6} }>
                   <img  width="400px" src={imgs[4].source} alt={imgs[4].alt} key={imgs[4].id}></img>
                   <div key={imgs[4].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4698 / 1883 / 1676 / 2791
                   </div>                 
               </Col>
               <Col span={12}>
                   <img width="400px" src={imgs[5].source} alt={imgs[5].alt} key={imgs[5].id}></img>
                   <div key={imgs[5].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4390 / 1781 / 1606 / 2610
                   </div>                  
               </Col>
            </Row>  
            <Row gutter={18}>
               <Col  xs={{ span:6, offset: 2 }} sm={{ span: 6, offset: 6 }} md={{ span: 9, offset: 3 }} lg={{ span:10, offset: 2 }} xl={{ span: 6, offset: 6} }>
                   <img  width="400px" src={imgs[6].source} alt={imgs[6].alt} key={imgs[6].id}></img>
                   <div key={imgs[6].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4432 / 1841 / 1614 / 2688
                   </div>                 
               </Col>
               <Col span={12}>
                   <img width="400px" src={imgs[7].source} alt={imgs[7].alt} key={imgs[7].id}></img>
                   <div key={imgs[7].id}>总长(mm) / 总宽(mm) / 总高(mm) / 轴距(mm)<br></br>4687 / 1814 / 1509(含行李架) / 2686
                   </div>                  
               </Col>
            </Row>  
            </div>
        )
    }
}