import React, { Component } from "react";
import { Route,Link, Router, Routes} from "react-router-dom";
import HomePageIntro from "./components/01HomePage/HomePageIntro";
import Blogs from "./components/02BlogHome/Blogs";
import About from "./components/03AboutSection/About";
// import Contact from "./components/04ContactSection/Contact";
import Blog1 from './components/02BlogHome/BlogPages/Blog1/Blog1'
import Blog2 from "./components/02BlogHome/BlogPages/Blog2/Blog2";
import Blog3 from "./components/02BlogHome/BlogPages/Blog3/Blog3";
import Blog4 from "./components/02BlogHome/BlogPages/Blog4/Blog4";
import Blog5 from "./components/02BlogHome/BlogPages/Blog5/Blog5";
import Blog6 from "./components/02BlogHome/BlogPages/Blog6/Blog6";
import Navigator from "./components/Navigation Components/Navigator";
import Wireframe1 from "../src/assests/Wireframe1.jpg";
import Wireframe2 from "../src/assests/Wireframe2.jpg";

class App extends Component{
  render(){
      const Owner={
          Name: "Rayyan",
          Username: "MemoryGhost26",
          Logo: "https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f",
          Wireframe1:Wireframe1,
          Wireframe2:Wireframe2
      }
      const myTweetObj = {
          userImage: 'https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f',
          name: "MemoryGhost",
          handle: "memory_ghost_",
          Message: " After Doing This Three Times, I Am Still Very Much CONFUSED...",
          likes :[2],
          retweets: [0],

      }
      
      return(
              <div className="App">
                  {/* <NavBar Owner={Owner}/> */}
                  <Navigator Owner={Owner}/>
                  <Routes>
                      <Route exact path="/" element={<HomePageIntro Owner={Owner}/>}/>
                      <Route exact path="/blogs" element={<Blogs/>}/>
                      <Route exact path="/about" element={<About Owner={Owner}/>}/>
                      {/* <Route exact path="/contact" element={<Contact/>}/> */}
                      <Route path="/blog1" element={<Blog1/>}/>
                      <Route path="/blog2" element={<Blog2/>}/>
                      <Route path="/blog3" element={<Blog3/>}/>
                      <Route path="/blog4" element={<Blog4/>}/>
                      <Route path="/blog5" element={<Blog5/>}/>
                      <Route path="/blog6" element={<Blog6 Owner={Owner}/>}/>
                  </Routes>
                  
              </div>
      );
  }
}

export default App;

