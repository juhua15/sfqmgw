import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HeadCarouse from "./headCarousel"

import ImageList from "./imageList"

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Products() {
  return (
        <div>
          <h2>我们的产品</h2>
          <HeadCarouse></HeadCarouse>
          <ImageList></ImageList>
        </div>
       
    );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/Products/">Products</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/Products/" component={Products} />
        
      </div>
    </Router>
  );
}

export default App;
