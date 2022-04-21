import React, { Component } from 'react'
import { GiFoxTail } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import "./About.css"

export default class About extends Component {

    render(){
        return(
            <section id='about'>
                <h5>Get To Know Me</h5>
                <h2>About Me</h2>

                <div className='container about__container'>

                    <div className='about__me'>
                        <div className='about__me-image'>
                            <img  src={this.props.Owner.Logo}  alt="This is an Image of Me"/>   
                        </div>
                    </div>

                    <div className='about__content'>
                        <div className='about__cards'>
                            <article className='about__card'>
                                <GiFoxTail className='about__icon'/>
                                <h5>Game Design</h5>
                                <small>This link will take you to my personal game dev portfolio</small>
                                <br></br>
                                <button className='btn'><a target="_blank" href="https://rayyangafoor-memoryghost.carrd.co/">Portfolio</a></button>
                            </article>
                            <article className='about__card'>
                                <GiFoxTail className='about__icon'/>
                                <h5>Exp</h5>
                                <small>This link will take you to my CV</small>
                                <br></br>
                                <br></br>
                                <button className='btn'><a target="_blank" href="https://rayyangafoor-resume.carrd.co/">CV</a></button>
                            
                            </article>
                        </div> 
                        <p className='about__me__text'>
                        I am an aspiring Game Designer and Developer based in the City of Johannesburg, 
                        South Africa. My interests include creative and meaningful design, 
                        through emergent systems, creating and bringing new ideas to life through 
                        purposeful design.
                        </p>
                    </div>

                </div>
            </section>
        )
    }
}