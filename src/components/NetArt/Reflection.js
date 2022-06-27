import React, { Component } from 'react'
import "./NetArt.css";
import { GiFox } from 'react-icons/gi';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import myDoc from "../../docs/digitalFragilty"
import mydoc from "../../docs/digitalFragilty.docx"

export default class Reflection extends Component {
  render() {
    return (
      <section>
        <section className='reflection__container'>
            <h1>NetArt Reflection</h1>
            <h5>It is important to acknowledged the follwing sections when reading this
                <ul>
                    <li><article>
               <button className='btn'><Link  to="/design">Design Section</Link></button>
               
               </article></li>
               <li><article>
               <button className='btn'><Link  to="/internetart">InternetArt Section</Link></button>
               
               </article></li>
                </ul>
            </h5>
            <section>
                <section>
                    <h2>Rationale</h2>
                    <article>
                        <h3>Project Goal</h3>
                        <article>
                            The Inter Art requirements section of the project is as follows:
                            <p>
                                <q>
                                A fully functional and realized Internet Artwork.
The work should reflect the creative framework you have chosen, rely on the internet and interactivity as a medium, and demonstrate your technical proficiency
It needs to make use of the React Library
                            </q>
                            </p> 
                            That being said we were also required to show engagement with the readings provided to us. For my net art, I focused on the first reading that was provided to us
                            which revovled around art in the age of the internet, which looked at the wokrs of Walter Benjamin as well.

                        </article>
                      <h3>Reflection on goals</h3>
                      <article>
                        With the above requirements set, and also considering my engagement with the net art readings, I wanted to create an inertactive artefact.
                        The idea was also inspired by my subject of analysis regarding the topic, which is the work of Zoe Beloff and her interactive piece The Beyond.
                        My engagemnet with the concept of net art also expanded outside this course into others, which allowed me to also create my lastes net art prototype which will be discussed.
                        
                        <p>
                            Essentially I found the goals easy to achieve since I decided to take a direction I am most comfortable with. 
                            The course material provided also made the design and development of my net art simple. I do feel that while the idea of net art was confusing in the begining, this course as well as others,
                            allowed me to fully grasp this concept. Ultimely the goals served as guideline that allowed me to successfully implement eveyrthing that is not visible on the sight.
                        </p>
                      </article>
                      <h3>Research</h3>
                      <article>
                        My research essentially revovled around the following, which are also my blogs:
                        <p>
                            <ul>
                                <li>
                                <article>
               <button className='btn'><Link  to="/blog1">The Beyond</Link></button>
               
               </article>
                                </li>
                                <li>
                                <article>
               <button className='btn'><Link  to="/extra3">Artificial Resurrection and The Artificial Simulation of Aura.</Link></button>
               
               </article>
                                </li>
                                <li>
                                <article>
               <button className='btn'><Link  to="/extra4"></Link>The Digital Fragility of The Starry Night</button>
               
               </article>
                                </li>
                            </ul>
                        </p>
                      </article>
                      <h3>
                        Research Take Away
                      </h3>
                      <article>
                        My latest blog which can also be viewed by clicking the link above, is what inspired my latest portotype. 
                        The topic revovles around internet within the fragile digital world. I wanted to create a game that show cases the importance of what was being discussed in the works of both
                        Benjamin , Rubio and Wharton. And what better way to do it then to host the artwork, within the very medium which there were discussing, The Digital.

                      </article>
                      <article>
                        Through out my research there were three topics that caught my attention: Digital Fragilty, Conservation and Authentication.
                        These all served as an inspiration for both design and concpet of my lastes art. The whole focuses on digital fraiglity and how it is avoided using the concept of migration.
                        In my game, migration served as a mechanic which allows you to keep the particle system, which represents the idea of art alive. 
                        If the player fails to migrate the object the particles essentially begin to die, slowing down until they dissappear.
                        <p>
                        The idea of authentication is something that really bothered me esspecially when it had to be discussed in terms of net art. But due to my recent exploration into the topic, I have come to a conclusion which can also be read about in my latest post.
                        Rubio and Wharton, state the following:
                        <p>
                        <q>
                        When we migrate an artefact, we are not moving the same object, rather we are regenerating a new artefact within a different medium
                        </q>

                        </p>
                        This essentially led me back to the idea of Aura which is a concept intoduced by Benjamin. This concept led me to the conclusion that 
                        <q>reproduction is something that ultimately gives rise to a new sense of aura and authenticity that surrounds the new artfact.</q>
                        Which when we look at in terms of migration, we can tackle the issue of multiple objects across multiple mediums.
                        At the end of the section of <q>Migrating to Migration</q>, I end of by saying that:
                        <p>
                            <q>
                            authenticity is matter defined by the artist themselves and no one else. The choice of migration is only rendered necessary if the artists deem so. Should they agree, they still become part of the process, and I see this as the artwork’s authenticity remaining intact due to the creator being a part of the process. This does however lead to the question:
Is a piece of digital art as a circulating object of migration ever truly completed?

                            </q>
                        </p>
                        The question at the end of this qoute is exactly why I removed the end states to my prototype. 
                        To me having an ending means that it is completed. Which is a question I still don't have the answer to.
                        </p>
                        <p>
                            The reason I also chose to use a particle system instead of an actual artwork like a digital version of a painting, is because,
                            throughout the year, I was thought to avoid the question of what is art. And just like the artist defines the authenticity of an artwork, I decided that the 
                            user should determine what the art actally is, does rendering the representation of art in the prototype abstract and while giving it the sense of life. 
                            
                        </p>
                        
                      </article>
                    </article>
                </section>
                <section>
                    <h2>Net Art Desription</h2>
                    <article>
                        So what is my net art? My net art can be seen as multiple artefacts.
                        The first artwork and the also the host for the rest of the artworks is essentially the website itself.
                        That being said, my website is designed around the aspects of a game. The site makes use of certain game elements
                        such as the pause and fast traveling menus, and now also the lastest addition being the quick item section, where the items 
                        are actually shortcuts to some of my blog posts. 
                    </article>
                    <article>
                        The second net art is my prototype games. For now there are two artefacts under this section.
                        I have others that are ready to be uploaded, but they ultimately leading to some issues which will be discussed.
                        The first prototype, is essentially the prototype of prototypes. This game was used to touch on the idea of purpose, while also serving 
                        as a first iteration for my other prototypes that were to come. 
                        Looking back at the net art page we can see the following description of the game:
                        <article>
                            <q>
                            It is my idea of life. How we climb up this mountain, in search of something, and as we search we also develop certain value and moral codes.
                            Essentially leading us to the search of a purpose. In search of a meaning to life. 
                            But in the end, when we do reach the peak of that mountain, we still remain lost.
                            To play it, use the A or D keys to move back and forward, and Space to Jump.
                            Be careful though, if you leave the temple, and return again too soon, you will miss out on statements.
                            This is what I call the patience mechanic. I implement to define another aspect of life, which is of course patience.
                            </q>
                        </article>
                    </article>
                    <article>
                        The second prototype, which was only decided on in the past week due to the my engagement with net art research in this course and another.
                        In my Digital Art Theory course, we looked at the idea of digigital fragility within the digital world. This led to the concept of
                        migration, a method of conserving art, and also the concept behind my game. The game is essentially meant to 
                        convey the imporatance of digital conservation, and also the effects of those conservations.
                        For more on please refer to my latest blog post.
                        {/* <iframe src={mydoc} className="documents"></iframe> */}
                    </article>
                </section>
                
                <section>
                    <h2>Implications</h2>
                    The implications I faced throughout this phase of the sites developement, was more situated within the unity engine. 
                    This is the same reason why I could not upload the original intended art work, The Raise and Fall of Flash, as well as the other artworks I created.
                    Essentially the Raise and Fall of FLash, was supposed to allow the player to import animations and other stuff with the click of a button, 
                    but the more they import the slower tha game gets and the more prone they become to picking up a virus, which is some of the reasons why Flash Adobe was discontinued.
                    Ultimatley this led to the follwing issue when uploading the actual prototypes:
                    <p>
                    <ul>
                        <li>High load time, which is alread visbile in the latest project, these other prototypes, would take a very long time to startup in the browser.</li>
                        <li>The screen width affected the layout of the UI of every project including the the ones uploaded. This made it difficult to play the games</li>
                        <li>And the lastest issue, my unity refuses to build any of my projects.</li>
                    </ul>
                    </p>
                    
                </section>
                <section>
                    <h2>Improvements</h2>
                    <p>
                        There are still some game elements that I would like to implement throughout the site, such as the shop.
                        Essentially the shop can be used to purchase tokens that can be used to play games, unlock and read blog posts, and also increase skill levels on the about page.
                        Which leads to a second implementation of making the about page more ineteractive, by allowng the skills to have levels that can be upgraded by the player.
                    </p>
                    <p>
                        There are still some bugs with regards to the screen width, when viewing through certain devices. Although they are minor issues, it can still improve the website a lot.
                    </p>
                    <p>
                        The latest game feature also needs to be redesigned after some tests. It would seem that a lot of users/ players belive it to be a media player UI that allows them to listen to music. 
                        That being said, the implementation of iconic game sound throughout the site will alos increase the immersive element of the website, which will further increase the sense of it being a game.
                    </p>
                </section>
            </section>
        </section>
        <section>
                <article>
               <button className='btn'><Link  to="/internetart">Back</Link></button>
               
               </article>
                </section>
        <section>
                <footer className='container footer__container'>
                Check Me Out
                    <div className='socials'>
                    <button className='social__icon'>< AiFillGithub/></button>
                    <button className='social__icon'>< AiFillLinkedin/></button>
                    <button className='social__icon'>< AiFillTwitterCircle/></button>
                    <button className='social__icon'>< AiFillInstagram/></button>
                    
                    </div>
                </footer>
            </section>
        </section>
    )
  }
}
