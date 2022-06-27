import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog5 extends Component {

    render(){
        return(
            <section className='Blog-Text'>
               <h1>Theoretical Reflection</h1>
              
               <p>
               The theoretical aspect of this course is something I actually found interesting, 
               something that I did not expect from myself. The purpose of this aspect is to 
               familiarise us as the students with the histories and theories behind the web and net art. 
               While also looking at how these are related to the “techno-colonial” impact on the web.
               </p>
               <br></br>
               <p>
                The theoretical aspect of this course is something I actually found interesting, 
                something that I did not expect from myself. The purpose of this aspect is to 
                familiarise us as the students with the histories and theories behind the web and 
                net art. While also looking at how these are related to the “techno-colonial” impact 
                on the web.
                For years I avoided the words colonial, economy, politics and anything possibly related to them. 
                This course however, I don’t want to say forced, but rather nudged me towards these topics. And I must, 
                the only regret I have is not looking into them sooner. Which is why I hope to continue to engage with 
                such materials. Despite my new found interest in these topics, I have however found it difficult to 
                actually engaged with many of the readings. Coming from an engineering degree, reading this much is 
                not something I was used to. I often found myself, looking towards shorter explanations of jumping 
                towards the interesting bits. Although, looking at where I have come from, I am proud of myself and 
                my new found knowledge. I enjoyed seeing how each topic connected to the next. Despite not enjoying 
                to much reading, I often found myself moving down a rabbit hole, and enjoying every minute of it. 
                One specific analysis I did struggle with though, was the very first one. And it is evident in my 
                blog. I was left with a bunch of questions after I was done. The topic of net art as a whole confused me. 
                Nevertheless, it is something that I am interested in.
                Some of these readings have actually given me ideas on what I want my own net art to be. Hopefully I can 
                obtain the technical skills necessary to implement them. 
                In the end I still feel a bit confused, or rather lost. I want to explore these topic further and see 
                just how fair the rabbit hole goes. 

               </p>
               <section>
               <article>
               <button className='btn'><Link  to="/blogs">Back</Link></button>
               
               </article>
               </section>
               
               
            </section>
        )
    }
}