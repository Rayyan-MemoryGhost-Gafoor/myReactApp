import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Blog6 extends Component {

    render(){
        return(
            <div className='Blog-Text'>
               <h1>Design Framework</h1>
               <br></br>
               <p>
                For my website I wanted to keep it to a simplistic minimalist layout. 
                My wireframes have gone through extensive iterations because of this. 
                Below you will see rough sketches of what I hoped to achieve with the layout. 
                Now, I hoped to just draw attention to the main focus of the assignment and that was the 
                functionality and the theoretical engagements of the readings provided to us. However, 
                I have begun looking into various colour schemes for the aesthetic I wish to convey. 
                Using a reading I found on “usability.gov”, 
                I attempted to design this minimalist website I had in mind. 
                The reading looked at the “Best Practices for Designing an Interface”. 
                The following points are what I drew inspiration from:
               </p>
               <h5>Keep the Interface simple.</h5>
               <p>
                   This is my entire objective. I wanted to use on the UI elements 
                   I saw fit to use at this stage of the project. Keeping the interactivity 
                   between the user and the site to a minimum, by avoiding the use of unnecessary 
                   element have proven to help draw the attention towards the blogs. 
                   (I have asked a few 
                   people to view the website while I observed silently)
                </p>
                <h5>Create Consistency </h5>
                <p>
                    This is something I struggled with the when I first took the IM course. 
                    I was so excited to experiment with everything that I lost track of where 
                    I wanted to go in the first place. This time I wanted to avoid that. 
                    I tried to remain consistent throughout very aspect of the website’s 
                    design. Form colour scheme to elements. The technical frameworks and 
                    practical we have engaged with in class have helped a lot with this. 

                </p>
               <h5>Strategically use colour</h5>
               <p>
                I wanted colour to not only draw attention to certain elements 
                but at the same time convey a message about who I am. At first, 
                I wanted to go with the colour blue and use different shades of it. 
                Why because I remember reading somewhere (an exceptionally long time ago) 
                that blue calms people down and people tend to remember better if blue is involved.
                But I was later not fond of this idea. I wanted the website to have something that 
                tells the user about me. 
                Which is why decided to then develop a colour scheme around the colour red. 
                Red is my favourite colour, to be more specific I love crimson, but nevertheless 
                every shade of red appeals to me. 
                I then decide to investigate the psychology behind colours. 
                Nothing to major, I just wanted to examine the emotions that are 
                associated with colours. For red, a few keywords drew my attention:

               </p>
               <p>
                    Excitement
                    <br></br>
                    Love
                    <br></br>
                    Energy
               </p>
               
               <p>
               These were positives in my book. But what concerned me was that red could also come off as aggressive. 
               Red is simply an angry colour. So, I wanted something that could fight against this. 
               I needed to something to kill off this anger, and that led me to pink. According to the 
               website I used for the meaning of this colours, pink is a shade of red, but it tends to 
               have the opposite effect on people. I decide to use light pink in the colour palette 
               because of this. Although this did not seem like it was enough. I needed something that 
               complete contrasted, yet complemented red. Yes, that led me back to blue. After everything 
               I still decided to go with what I heard a long time ago.
                Nevertheless, this site had a piece of me in it now. 
                What I did forget to mention, was that this site will 
                revolve around my journey as a game designer. Which might 
                also influence my ideas for net art. The red, still felt overwhelming, 
                lurking in the background, so I decided to darken its tone and add a 
                hint of black to the website as well. Now according to the psychology 
                behind colours, black is well associated with death, so I didn’t want to 
                use to much of it. I did however try to link the words and emotion associate 
                with black to red. As a game designer, I have no idea what my next Idea might be, 
                in every new project I attempt something new. Like in my most recent one, 
                I am attempting to create a game that represent the concept of morality. 
                This mystery and experience is what excites me. And that is exactly the 
                link I drew between red and black. Black is also associated with mystery 
                and alongside red, this mystery is what I love and what brings me joy and 
                excitement on this journey of Game Development.

               </p>
               {/* <img  src=  alt="This is an Image of Me"/>   */}
               <img src={this.props.Owner.Wireframe1} />
               <img src={this.props.Owner.Wireframe2} />
               <br></br>

               <button className='btn'><Link className='Nav-link-names' to="/blogs">Back</Link></button>
               
               <h5>References</h5>
               <p>The Best Website Color Palettes to Increase Engagement in 2022<a target="_blank" href="https://www.crazyegg.com/blog/website-color-palettes/"> Read More</a></p>
               <p>Using Light, Color and Contrast Effectively in UI Design<a target="_blank" href="https://usabilitypost.com/2008/08/14/using-light-color-and-contrast-effectively-in-ui-design/"> Read More</a></p>
               <p>10 User Interface Design Fundamentals<a target="_blank" href="https://blog.teamtreehouse.com/10-user-interface-design-fundamentals"> Read More</a></p>
               <p>User Interface Design Basics<a target="_blank" href="https://www.usability.gov/what-and-why/user-interface-design.html"> Read More</a></p>
               <p>The Definitive Guide to Creating High Converting Landing Pages<a target="_blank" href="https://neilpatel.com/blog/the-definitive-guide-to-creating-high-converting-landing-pages/"> Read More</a></p>
               <p>The Art of Color Coordination<a target="_blank" href="https://neilpatel.com/blog/art-of-color-coordination/"> Read More</a></p>
               <p>The psychology of color in web design<a target="_blank" href="https://99designs.com/blog/creative-inspiration/psychology-color-web-design/"> Read More</a></p>
               
            </div>
        )
    }
}