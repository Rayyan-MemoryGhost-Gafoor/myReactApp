import React, { Component, useState} from 'react'
import { Link } from 'react-router-dom'
import { GiFox } from 'react-icons/gi'
import "./Nav2.css"
import Pause from '../04PopUp/Pause'
import Logo from "../../assests/Logo.jpg"
import healthBar from "../../assests/pauseMenu/healthBar.png"
import QuickMenu from '../05QuickMenu/QuickMenu'

function Navigator(){
  const [openModal, setopenModal] = useState(false)
    return (
      <div>
        <nav className='navbar'>
        
        <div className='leftSide'>
        <Link to="/" className='navBar-Logo'>
           <img className='NavLogo' src={Logo}/>
           MEMORYGHOST
        </Link>
            <button className='modal__button' onClick={()=>setopenModal(true)}>Pause</button>
            <img className='health__bar' src={healthBar}></img>
        </div>
        
        <Pause open={openModal} onClose={()=> setopenModal(false)}/>
        
      </nav>
      <div className='recents'>
        <QuickMenu></QuickMenu>
      </div>
      </div>
      
  )
  }
    
  export default Navigator
  // <Link to="/" className='navBar-Logo'><img className='NavLogo' src={this.props.Owner.Logo}/>{this.props.Owner.Username}</Link>
