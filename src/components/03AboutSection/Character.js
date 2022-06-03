import React, { Component } from 'react'
import { GiFoxTail } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import "./character.css"
import Items from './Items'
import me2 from "./me2.png"
import Statistics from './Statistics'

export default class Character extends Component {

    render(){
        return(
            <section className='character__menu'>
               <h2>MEMORYGHOST</h2>
               <div className='character__main'>
                    <div className='character__items'>
                       <Items/>
                    </div>
                   <div className='character__avatar'>
                       <img className='avatar1' src={me2}></img>
                   </div>
                   <div className='character__stats'>
                       <div>
                            <h5>Name: Rayyan Gafoor</h5>
                            <h2>Alias: MEMORYGHOST</h2>
                            <h5>Race: Half-Elf</h5>
                            <h5>Class: DragonMage</h5>
                       </div>
                        <div>
                            <Statistics
                            Vigor=" 57"
                            Stamina=" 45"
                            Vitality=" 45"
                            Strength=" 60"
                            Dexterity=" 45"
                            Intelligence=" 50"
                            Luck=" -15"
                        />
                        </div>
                       
                   </div>
                   
               </div>
            </section>
        )
    }
}