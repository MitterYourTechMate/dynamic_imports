import logo from './logo.svg';
import './App.css';
import React, {lazy} from 'react';
import Home from './components/home';
// import Shop from './components/shop';
// import About from './components/about';
// import Contact from './components/contact';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

const Shop = lazy(() => import("./components/shop"))
const Contact = lazy(() => import("./components/contact"))
const About = lazy(() => import("./components/about"))

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/shop" element={<Shop></Shop>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
      <Route path="/about" element={<About></About>}/>
    </Routes>
    </Router>
  );
}

export default App;
