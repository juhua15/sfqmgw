
import React from "react";
import { Row, Col, Carousel } from 'antd';
import Sp from "../imgs/newsuper.jpg"
import Mr from "../imgs/octavia.jpg"
import Xr from "../imgs/2019raipd.jpg"
import Gt from "../imgs/gt.jpg"
import Kdyk from "../imgs/kdyk.jpg"
import Krk from "../imgs/krk.jpg"
import Kmk from "../imgs/kmk.jpg"
import M_GT from "../imgs/mImg/GT.jpg"
import M_Super from "../imgs/mImg/super.jpg"
import M_KMK from "../imgs/mImg/kmk.jpg"
import M_KRK from "../imgs/mImg/krk.jpg"
import M_SKD from "../imgs/mImg/skd.jpg"
import M_SKD_KV from "../imgs/mImg/skd_KV.jpg"
export default class ContentCarousel extends React.Component {

    state = {
        imgurls: [
            { imgurl: Sp, alt: "速派 给你看点实在的", id: 1 },
            { imgurl: Mr, alt: "明锐智行款 生活总有惊喜", id: 2 },
            { imgurl: Xr, alt: "昕锐 让美好相伴", id: 3 },
            { imgurl: Gt, alt: "柯迪亚克GT 这就是轿跑SUV", id: 4 },
            { imgurl: Kdyk, alt: "柯迪亚克 陪你去经历", id: 5 },
            { imgurl: Krk, alt: "柯珞克 从心去出发", id: 6 },
            { imgurl: Kmk, alt: "柯米克 自有我可能", id: 7 },
        ],
        mImgurls:[
            { imgurl: M_SKD_KV, alt: "快乐不独行，音乐不独唱", id: 1 },
            { imgurl: M_Super, alt: "速派 给你看点实在的", id: 2},
            { imgurl: M_GT, alt: "柯迪亚克GT 这就是轿跑SUV", id: 3 },
            { imgurl: M_KMK, alt: "柯米克 自有我可能", id: 4 },
            { imgurl: M_KRK, alt: "柯珞克 从心去出发", id: 5 },
            { imgurl: M_SKD, alt: "斯柯达创造惊喜无限", id: 6}
        ]
    };

    render() {

        let  w=window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        if (w<768){
            return (
                <div margin-top={"8px"}> 
                <Row >
                    <Col xs={{ span: 20, offset: 2 }} sm={{ span: 18, offset: 3 }} md={{ span: 18, offset: 3 }} >
                        <Carousel autoplay effect="fade" dotPosition="bottom">
                            {
                                this.state.mImgurls.map((item) => <img  src={item.imgurl} key={item.id} alt={item.alt}></img>)
                            }
                        </Carousel>
                    </Col>
                </Row>
            </div>
            )
        }
        return (

            <div margin-top={"8px"}> 
                <Row >
                    <Col  md={{ span: 18, offset: 3 }} lg={{ span: 20, offset: 2 }} xl={{ span: 18, offset: 3 }}>
                        <Carousel autoplay effect="fade" dotPosition="bottom">
                            {
                                this.state.imgurls.map((item) => <img  src={item.imgurl} key={item.id} alt={item.alt}></img>)
                            }
                        </Carousel>
                    </Col>
                </Row>
            </div>


        );
    }


}
