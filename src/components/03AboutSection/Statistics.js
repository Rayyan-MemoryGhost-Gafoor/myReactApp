import React, { Component } from 'react'
import { GiFoxTail } from 'react-icons/gi'
import { GiPocketBow } from 'react-icons/gi'
import { GiHoodedAssassin } from 'react-icons/gi'
import { GiCrosshair } from 'react-icons/gi'
import { GiTiredEye } from 'react-icons/gi'
import { GiBrain } from 'react-icons/gi'
import { GiSnake } from 'react-icons/gi'
// skills set above, item set below
import { GiGamepad } from 'react-icons/gi'
import { GiChopsticks } from 'react-icons/gi'
import { GiLaptop } from 'react-icons/gi'
import { Gi3DGlasses } from 'react-icons/gi'
import { GiCoffeeMug } from 'react-icons/gi'


import "./character.css"

const Statistics=(props)=>{
        return(
            <div className='stats__container '>
                <div><h5>Stats</h5></div>
                <div className='statistics'>
                    <p>Vigor:{props.Vigor} </p>
                    <p>Stamina:{props.Stamina} </p>
                    <p>Vitality:{props.Vitality} </p>
                    <p>Strength:{props.Strength} </p>
                    <p>Dexterity:{props.Dexterity} </p>
                    <p>Intelligence:{props.Intelligence} </p>
                    <p>Luck:{props.Luck} </p>

                </div>
                <div><h5>Skills</h5></div>
                <section className='skills'>
                    <div className='skill__container'><GiBrain className='skill__icon'/> Intelligence</div>
                    <div className='skill__container'><GiTiredEye className='skill__icon'/> Observation</div>
                    <div className='skill__container'><GiCrosshair className='skill__icon'/>FPS_Expert</div>
                    <div className='skill__container'><GiPocketBow className='skill__icon'/>Archery</div>
                    <div className='skill__container'><GiSnake className='skill__icon'/>Slytherin</div>
                    <div className='skill__container'><GiHoodedAssassin className='skill__icon'/>Assassin</div>
                </section>
            </div>
        )
}
export default Statistics