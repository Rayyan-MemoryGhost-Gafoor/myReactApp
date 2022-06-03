import React, { Component } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import { GiFoxTail } from 'react-icons/gi'


const Card=(props)=>{
    return(
        <div className='card__holder'>
            <div className='layer1'>
                <img className='card__img' src={props.img}/>
            </div>
            <div className='layer2'>
                <h5>{props.blog__num}</h5>
                <h5>{props.title}</h5>
                <small>{props.description}</small>
                
            </div> 
               
        </div>
    )

}
export default Card