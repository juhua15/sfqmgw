import React from "react"
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom"
import { Row, Col } from 'antd';
import HeadCarouse from "./headCarousel"

import ImageList from "./imageList"

function Index() {
  return (
    <div>
      <h2>我们的产品</h2>
      <HeadCarouse></HeadCarouse>
      <ImageList></ImageList>
    </div>
   
);
}

function About() {
  return (
    <div>
      <h2>我们的产品</h2>
      <HeadCarouse></HeadCarouse>
      <ImageList></ImageList>
    </div>
   
);
}

function Products() {
  return (
        <div>
          {/* <h2>我们的产品</h2> */}
          <HeadCarouse></HeadCarouse>
          <ImageList></ImageList>
          <br></br>
          <div>
            联系电话：023-85287555；<br></br>
            地址:重庆市璧山区永嘉大道102号（永嘉大桥桥头）
          </div>
        </div>
        
       
    );
}

function App() {
  return (
    <Router>
      <div>

      <Row>
      <Col xs={{ offset:4}} sm={{ offset: 3 }} md={{ offset:3 }} lg={{offset: 10 }} xl={{ span: 4, offset: 10 }}><h1>重庆三丰旗舰店</h1></Col>
     </Row>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">我们的产品</Link>
            </li>
            <li>
              <Link to="/about/">我们的产品</Link>
            </li> */}
            <li>
              <Link to="/Products/"></Link>
            </li>
          </ul>
        </nav>
        {/* <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} /> */}
        <Route path="/Products/" component={Products} />
        <Redirect to={"/Products/"}/>
      </div>
    </Router>
  );
}

export default App;
