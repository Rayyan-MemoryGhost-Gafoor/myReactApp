import React, { Component, useState} from 'react';
import { Link } from 'react-router-dom';
import { GiFox } from 'react-icons/gi';
import { GiFoxTail } from 'react-icons/gi';
import Logo from "../../assests/Logo.jpg";
import "./QuickMenu.css";


function QuickMenu(){
    return (
      <nav className='quickmenu__container'>
        <div className='quickmenu__items'>
            <div></div>
            <div className='quickmenu__item' >
                <Link className='item' data-tooltip="The Beyond"  to="/blog1">
                    <GiFox className="quickitem__icon"/>
                </Link>
            </div>
            <div></div>
            <div className='quickmenu__item' >
                <Link className='item' data-tooltip="The Divide"  to="/blog3">
                    <GiFox className="quickitem__icon"/>
                </Link>
            </div>
            <div data-tooltip="Home" >
                    <Link to="/" className='navBar-Logo'>
                <img  className='NavLogo' src={Logo}/>
                </Link>
            </div>
            <div className='quickmenu__item' >
                <Link className='item' data-tooltip="Digital Fragilty"  to="/extra4">
                    <GiFox className="quickitem__icon"/>
                </Link>
            </div>
            <div></div>
            <div className='quickmenu__item' >
                <Link className='item' data-tooltip="Aura: Beyond II"  to="/extra3">
                    <GiFox className="quickitem__icon"/>
                </Link>
            </div>
            
        </div>
    </nav>
  )
  }
    
  export default QuickMenu