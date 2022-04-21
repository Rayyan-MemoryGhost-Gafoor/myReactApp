import React, { Component } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Blog1 from './BlogPages/Blog1/Blog1'
import { GiFoxTail } from 'react-icons/gi'

export default class BlogList extends Component {

    render(){
        return( 
            
            <div className='Blogs-cards'>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 1</h5>
                    <h5>Beyond the Beyond</h5>
                    <small>A critical analysis of the interactive, virtual reality artwork, created by Zoe Beloff, The Beyond.</small>
                    <br></br>
                    <Link className='blog__link' to="/blog1">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 2</h5>
                    <h5>Core Principles of Design and Aesthetics for The Web</h5>
                    <small>Humans have become visual creatures who prefer objects that are more appealing over the less</small>
                    <br></br>
                    <Link className='blog__link' to="/blog2">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 3</h5>
                    <h5>The Ever-Growing Divide</h5>
                    <small> With my recent academic explorations however, within 
                various areas of research, have found that the ‘Digital Divide’ 
                is always lurking in the shadows. The technological shift since the 
                start of the covid-19 pandemic, threatens to increase the growth of 
                this divide exponentially.</small>
                <br></br>
                    <Link className='blog__link' to="/blog3">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 4</h5>
                    <h5>Technical Reflections</h5>
                    <small>This serves as my relfection for the with the technical section of this course</small>
                    <br></br>
                    <Link className='blog__link' to="/blog4">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 5</h5>
                    <h5>Theoretical Reflection</h5>
                    <small>This serves as my relfection on my engagement with the theory section of this course</small>
                    <br></br>
                    <Link className='blog__link' to="/blog5">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 6</h5>
                    <h5>Design Framework</h5>
                    <small>This serves as my relfection on the design behind my website</small>
                    <br></br>
                    <Link className='blog__link' to="/blog6">read more...</Link>
                </article>
                <div className='blog__links'>
                    <Routes>
                        
                        {/* <Route exact path="/blog2" element={<Blogs/>}/>
                        <Route exact path="/blog3" element={}/>
                        <Route exact path="/blog4" element={<Contact/>}/> */}
                    </Routes>
                </div>
            </div>
        )
    }
}