import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Blog7 extends Component {

    render(){
        return(
            <section className='Blog-Text'>
               <section>
                   <h1>Technical Reflection</h1>
                 <section>
                     <h2>The Feedback</h2>
                     <article>
                        After the initial publishing of the website, I have received feedback on some of the technical issues and choices,
                        which I tried my best to focus on and improve on this time around.
                     </article>
                     <article>
                         <article>                  
                            <h3>The Power of The Scroll...bar</h3>
                            In my initial release of the website, I removed the scrollbar entirely. However, after reading the feedback, I tested this out across the website with 
                            multiple users.  and as the feedback stated, some users found it difficult to scroll through the website, especially after I embedded my netart.
                            That being said, I redesigned the scrollbar to fit in with the aesthetic of the website, and enabled it once again. 
                         </article>
                         <article>
                             <h3>Who needs a break anyway?</h3>
                                I lacked some knowledge on what semantic markup actually is, while I'm still trying to improve on this,
                                I have tried to remove, all the unnecessary tags used through the website. Although I have kept some of the "div"s, I have tried to
                                use the section tag and any others I could find.  I found this easier than using "br" all time (Thank you), and along with CSS to edit them,
                                this made it simpler to edit the layout of my blog's paragraphs and structure. 
                         </article>
                         <article>
                             <h3>__Naming-conventions__</h3>
                                Once pointed out, I realised all the unnecessary stress, I am putting myself through. While I have not changed them all (in fear of breaking the site)
                                I have stuck with one convention: name__desrciption (camel__case). This made it simpler to also keep track of my CSS edits, and once again thank you.
                         </article>
                         <article>
                             <h3>Props People, I Need Props!</h3>
                                While I never really understood the practical purpose of "props", and after struggling to actually implement them to create my blog cards, I finally understand
                                their purpose. While it did prove difficult and confusing at first, after some advice (Thank you Andre), the implementation was successful. 
                                And I must say, this is so much better. after creating this blog and adding the other new ones, it was definitely more convenient to do so.
                         </article>
                     </article>
                 </section>
                 <section>
                 <h2>So Whats New</h2>
                     <article>
                        I have removed and added features. The choices made throughout were a result of implementing my "Net Art".
                        my Internet Art is essentially the experience of a game within the website, which ultimately led to:
                     </article>
                     <article>
                         <h3>What... No Navbar?</h3>
                            As I have said, I wanted a game like an experience, and other than menus before the actual game, we don't really have a navigation bar. 
                            The player's experience is mostly influenced by the actual game, and what do we do while in the game, we pause.
                            So I have removed the navbar and replaced it with the pause button. 
                            The pause button essentially is used to bring up a pop-up menu, which is actually an implementation of a modal.
                            the modal, consists of the links to various pages, as well as an interactive map.
                     </article>
                     <article>
                         <h3>I Like It From The Front</h3>
                            I found myself also experimenting more with layouts and the structure of my website. 
                            As seen in the about section. I have created a "character menu" (another game element). 
                            that being said, I believe I am improving a lot more on the front end development aspect of this project.
                            Although I am still having a bit of an issue with the responsiveness of the media queries at some sizes.
                     </article>
                 </section>
                 <section>
                     <h2>My REACT-ion with Unity</h2>
                     <article>
                        Aside from the interactive game elements and UI of my website, I wanted to create small games (prototypes)
                        that serve as their form of internet art. What I found most difficult about this was actually getting the Unity WebGL
                        to work with my React project. This proved to be difficult, and many tutorials/ documentation on the matters are quite scarce.
                        So to work around this matter I used Simmer.io to upload my game, and then embed it using the iframe tag.
                        If it is possible could we please get a lecture on this? 
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