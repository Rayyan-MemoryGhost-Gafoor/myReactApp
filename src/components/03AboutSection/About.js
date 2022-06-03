import React, { Component } from 'react'
import { GiFoxTail } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import "./About.css"
import Character from './Character'
import { GiFox } from 'react-icons/gi'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'


export default class About extends Component {

    render(){
        return(
            <section className='about'>
                    <h5>Get To Know Me</h5>
                    <h2>About Me</h2>
                <section className='character__container'>
                        <Character/>
                </section>
                <section className='container about__container'>

                    <div className='about__me'>
                        <div className='about__me-image'>
                            <img  src={this.props.Owner.Logo}  alt="This is an Image of Me"/>   
                        </div>
                    </div>

                    <div className='about__content'>
                        <p className='about__me__text'>
                            I am an aspiring Game Designer and Developer based in the City of Johannesburg, 
                            South Africa. My interests include creative and meaningful design, 
                            through emergent systems, creating and bringing new ideas to life through 
                            purposeful design.
                        </p>
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
                
            </section>
        )
    }
}