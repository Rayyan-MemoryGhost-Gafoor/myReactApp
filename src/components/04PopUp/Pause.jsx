import React from 'react'
import { Link } from 'react-router-dom'
import map from './map.jpg'
import {FiMapPin} from 'react-icons/fi'

const Pause = ({open, onClose}) => {
    if(!open) return null;
  return (
    <main onClick={onClose} className='overlay'>
        <section onClick={(e)=>{
            e.stopPropagation()
        }} className='modal__container'>
            <article className='map__container'>
            <div className='layer1__modal'>
                <img src={map} alt=""/>
            </div>
            <div className='layer2__modal'>
                <Link onClick={onClose} className='home__map' to="/"><FiMapPin className='map__icon'/></Link>
                <Link onClick={onClose} className='design__map' to="/design"><FiMapPin className='map__icon'/></Link>
                <Link onClick={onClose} className='internetart__map' to="/internetart"><FiMapPin className='map__icon'/></Link>
                <Link onClick={onClose} className='blog__map' to="/blogs"><FiMapPin className='map__icon'/></Link>
                <Link onClick={onClose} className='about__map' to="/about"><FiMapPin className='map__icon'/></Link>
                
                
            </div>
            </article>
           
            <div className='modal__right'>
                {/* <button onClick={onClose} className='close__button'>
                    Resume
                </button> */}
                <div className='content'>
                    <div onClick={onClose} className='Nav-link-names'>Resume</div>
                    <Link onClick={onClose} className='Nav-link-names' to="/">Home</Link>
                    <Link onClick={onClose} className='Nav-link-names' to="/blogs">Blogs</Link>
                    <Link onClick={onClose} className='Nav-link-names' to="/about">About</Link>
                    <Link onClick={onClose} className='Nav-link-names' to="/internetart">Net Art</Link>
                    <Link onClick={onClose} className='Nav-link-names' to="/design">Design</Link>
                    
                </div>
            </div>
        </section>

    </main>
  )
}

export default Pause