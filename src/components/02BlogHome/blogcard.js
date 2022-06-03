import React, { Component } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import { GiFoxTail } from 'react-icons/gi'
import "./blogs.css"


const blog_card=(props)=>{
    return(
        <div>
            <GiFoxTail className='blog__icon'/>;
            <img  src={props.display}/>
            <h5>{props.blog__num}</h5>;
            <h5>{props.title}</h5>;
            <small>{props.description}</small>;
         
        </div>
    )

}
export default blog_card