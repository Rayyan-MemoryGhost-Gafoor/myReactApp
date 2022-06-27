import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Blog8 extends Component {

    render(){
        return(
            <section className='Blog-Text'>
                <section>
                   <h1>Theoretical Reflection</h1>
                   <section>
                       <article>
                       With no new readings to engage with, I was allowed to completely explore my ideas for my internet artwork.
                        That being said. my research is still ongoing, but going back to my blog post "Beyond the Beyond", I have decided to explore
                        internet art that is interactive.
                        This led to me deciding on gaming and game development.
                        My research from here on out will be focused on the theory behind game development, 
                        more specifically the design aspect of it. 
                        I will be looking into the theory behind game interface design in both digital and analogue games. 

                        That being said, I thought that my research in other modules will serve as good blogs.
                        These however will all have generic blog cards.
                       </article>
                   </section>
                   
               </section>
               
               <section>
                <article>
               <button className='btn'><Link  to="/blogs">Back</Link></button>
               
               </article>
                </section>
            </section>
        )
    }
}