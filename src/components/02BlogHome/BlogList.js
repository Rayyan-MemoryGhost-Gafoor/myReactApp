import React, { Component } from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Blog1 from './BlogPages/Blog1/Blog1';
import { GiFox } from 'react-icons/gi';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import Card from './card';
import blog1card from "../../assests/blogCards/blog1card.png";
import blog2card from "../../assests/blogCards/blog2card.png";
import blog3card from "../../assests/blogCards/blog3card.png";
import blog4card from "../../assests/blogCards/blog4card.png";
import blog5card from "../../assests/blogCards/blog5card.png";
import blog6card from "../../assests/blogCards/blog6card.png";
import blog7card from "../../assests/blogCards/blog7card.png";
import blog8card from "../../assests/blogCards/blog8card.png";
import blogEcard from  "../../assests/blogCards/blogEcard.png";



export default class BlogList extends Component {
    
    render(){
        return( 
            <main>
            <section className='Blogs__cards'>
              {/* Blog 1 */}
                <div className='blog__card'>
                    <Link className='blog__link' to="/blog1">
                        <Card
                        img={blog1card}
                        // blog__num= "Blog 1"
                        title="Beyond the Beyond"
                        // description="A critical analysis of the interactive, virtual reality artwork, created by Zoe Beloff, The Beyond."
                        />
                    </Link>
               </div>
               {/* Blog 2 */}
               <div className='blog__card' >
                    <Link className='blog__link' to="/blog2">
                        <Card
                        img= {blog2card}
                        // blog__num= "Blog 2"
                        title="Core Principles of Design and Aesthetics for The Web"
                        // description="Humans have become visual creatures"
                        />
                    </Link>
               </div>
               {/* Blog 3 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog3">
                        <Card
                        img= {blog3card}
                        // blog__num= "Blog 3"
                        title="The Ever-Growing Divide"
                        // description="The ‘Digital Divide’ is always lurking in the shadows."
                        />
                    </Link>
               </div>
               {/* Blog 4 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog4">
                        <Card
                        img= {blog4card}
                        // blog__num= "Blog 4"
                        title="Technical Reflections"
                        // description="This serves as my relfection for the with the technical section of this course."
                        />
                    </Link>
               </div>
               {/* Blog 5 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog5">
                        <Card
                        img= {blog5card}
                        // blog__num= "Blog 5"
                        title="Theoretical Reflection"
                        // description="This serves as my relfection on my engagement with the theory section of this course."
                        />
                    </Link>
               </div>
               {/* Blog 6 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog6">
                        <Card
                        img= {blog6card}
                        // blog__num= "Blog 6"
                        title="Design Framework"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               {/* Blog 7 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog7">
                        <Card
                        img= {blog7card}
                        // blog__num= "Blog 6"
                        title="Technical Reflections II"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               <div className='blog__card'>
                    <Link className='blog__link' to="/extra5">
                        <Card
                        img= {blog7card}
                        // blog__num= "Blog 6"
                        title="Blog Seven & A Half Technical Reflection III"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               {/* Blog 8 */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/blog8">
                        <Card
                        img= {blog8card}
                        // blog__num= "Blog 6"
                        title="Theoretical Reflection II"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               <div className='blog__card'>
                    <Link className='blog__link' to="/extra6">
                        <Card
                        img= {blog8card}
                        // blog__num= "Blog 6"
                        title="Blog Eight & A Half Theoretical Reflection III"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               {/* Extras */}
               <div className='blog__card'>
                    <Link className='blog__link' to="/extra1">
                        <Card
                        img= {blogEcard}
                        // blog__num= "Blog 6"
                        title="African Cultures of Technology"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               <div className='blog__card'>
                    <Link className='blog__link' to="/extra2">
                        <Card
                        img= {blogEcard}
                        // blog__num= "Blog 6"
                        title="Cognitive Biases in Among Us"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
               <div className='blog__card'>
                    <Link className='blog__link' to="/extra3">
                        <Card
                        img= {blogEcard}
                        // blog__num= "Blog 6"
                        title="Artificial Resurrection and The Artificial Simulation of Aura."
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div><div className='blog__card'>
                    <Link className='blog__link' to="/extra4">
                        <Card
                        img= {blogEcard}
                        // blog__num= "Blog 6"
                        title="The Digital Fragility of The Starry Night"
                        // description="This serves as my relfection on the design behind my website"
                        />
                    </Link>
               </div>
            </section>
            <section>
                <footer className='container footer__container'>
                    Check Me Out
                    <div className='socials'>
                        <button className='social__icon'>< AiFillGithub/></button>
                        <button className='social__icon'>< AiFillLinkedin/></button>
                        <button className='social__icon'>< AiFillTwitterCircle/></button>
                        <button className='social__icon'>< AiFillInstagram/></button>
                    </div>
                </footer>
                </section>
            </main>
        )
    }
}

{/* <blog_card
                
                blog__num= "Blog 6"
                title="Design Framework"
                description="This serves as my relfection on the design behind my website"
                /> */}


//   {/* <article className='blog__card'>
//                     <GiFoxTail className='blog__icon'/>
//                     <h5>Blog 6</h5>
//                     <h5>Design Framework</h5>
//                     <small>This serves as my relfection on the design behind my website</small>
//                     <br></br>
//                     <Link className='blog__link' to="/blog6">read more...</Link>
//                 </article> */}
                // <div className='blog__links'>
                //     <Routes>
                        
                //         {/* <Route exact path="/blog2" element={<Blogs/>}/>
                //         <Route exact path="/blog3" element={}/>
                //         <Route exact path="/blog4" element={<Contact/>}/> */}
                //     </Routes>
                // </div>