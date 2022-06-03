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

const Items=(props)=>{
        return(
            <div className='items__container '>
                <div><h2>Inventory</h2></div>
                <div className='items'>
                    <div className='item__container'><GiGamepad className='item__icon'/></div>
                    <div className='item__container'><GiChopsticks className='item__icon'/></div>
                    <div className='item__container'><GiLaptop className='item__icon'/></div>
                    <div className='item__container'><Gi3DGlasses className='item__icon'/></div>
                    <div className='item__container'><GiCoffeeMug className='item__icon'/></div>
                </div>
            </div>
        )
}
export default Items