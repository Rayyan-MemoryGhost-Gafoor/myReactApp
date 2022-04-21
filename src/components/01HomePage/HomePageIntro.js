import React, { Component } from 'react'
import { GiFox } from 'react-icons/gi'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import "./Home.css"


export default class HomePageIntro extends Component {
  render() {
    return (
        <React.Fragment>

          <header>
            <div className='container header__container'>
              <h5>Hello I am</h5>
              <h1> <GiFox/> Ghost <GiFox/></h1>
              <h5 className='text-light'>Game Developer | Designer </h5>
              <div className='me'><img className='homeImage' src={this.props.Owner.Logo}/></div>
            </div>
          </header>

          <footer className='container footer__container'>
            Check Me Out
            <div className='socials'>
              <button className='social__icon'>< AiFillGithub/></button>
              <button className='social__icon'>< AiFillLinkedin/></button>
              <button className='social__icon'>< AiFillTwitterCircle/></button>
              <button className='social__icon'>< AiFillInstagram/></button>
            
            </div>
          </footer>
          
          
        </React.Fragment>
    )
  }
}
