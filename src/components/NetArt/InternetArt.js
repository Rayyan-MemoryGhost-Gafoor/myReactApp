import React from "react";
import ReactDOM from "react-dom";
import Netart from "./Netart";
import Netarttwo from "./Netarttwo";
import "./NetArt.css";
import { GiFox } from 'react-icons/gi';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default class InternetArt extends React.Component {
  render() {
    return (
        <section className="main__container">
            
            
            <section className="netart__container">
                <h2>This Is My NetArt Prototype 1</h2>
                <article className="netart__text">
                <p>This section is still in development. My net art is essentially the entire website. 
                 I want the player to have a similar experience that they have when they interact with a games UI.
                 Hence the removal of the navigation menu, and the implementation of a pause button. 
                 But this will all be explained in my design reflection.
              </p>
              <p>
              When we first wrote on Net Art, I wanted to look at and analyse something that was familiar to me.
That led me to look at net art that is interactive. I choose interactivity because it reminded me of games. 
And that is what my internet art is. Aside from using game elements  to create a game like an experience throughout the website
I decided to also develop various short games or rather prototypes. 

My research earlier in this course has also led me to certain ideas for these prototypes.
One prototype, in particular, would revolve around the rise and fall of Adobe Flash. 
Or another trying to recreate a world, similar to how Zoe Beloff achieved in her Beyond project.
              </p>
              <h3>Technical concerns and issues.</h3>
              <p>
              My main concern and the current issue is using the "React Unity WebGL" with the Unity WebGL.
It has proved to be difficult to implement. For now, I am using my fallback solution 
Simmer.io. Although, I believe using the WebGL will serve me better. 
              </p>
              <section>
                <article>
               <button className='btn'><Link  to="/reflection">NetArt Reflection</Link></button>
               
               </article>
                </section>
                </article>
            </section>
            <section className="netart__content">
                <h5>Important Note: This Part of my Net art can only be experience of a PC at the time being</h5>
                <section className="netart__project">
                    <h2>The Purpose of Purpose</h2>
                    <article className="netart__explain">
                        For now, my first net art serves as a prototype of prototypes.
                        It is my idea of life. How we climb up this mountain, in search of something, and as we search we also develop certain value and moral codes.
                        Essentially leading us to the search of a purpose. In search of a meaning to life. 
                        But in the end, when we do reach the peak of that mountain, we still remain lost.
                        To play it, use the A or D keys to move back and forward, and Space to Jump.
                        Be careful though, if you leave the temple, and return again too soon, you will miss out on statements.
                        This is what I call the patience mechanic. I implement to define another aspect of life, which is of course patience. 
                    </article>
                    <section className="netart__embeded">
                        <Netart/>
                    </section>
                </section>
                <section className="netart__project">
                    <h2>Digital Fragility</h2>
                    <article className="netart__explain">
                      This next prototype shows my take on Digital Art in the Age of Digital Fragility. My recent exam revovled around the idea of art within the
                      ever-so fragile medium that is the Digital. We looked at the specific paper wirrten by Rubio, F. D. and Wharton, G, where they looked towards the conservation of 
                      digital art and also the consequence conservation has on the authenticity of the artefact.
                      My take on this being the digital art piece I have presented here, showcases the importance of conservation, but also the effects of it.
                    <p>
                        <q>
                      Migration changes the inner structure of an artefact as well as its material modalities (Rubio and Wharton, 2022). 
                        </q>
                    </p>
                      This qoute sums up the idea behind my Net Art Prototype Two.My art shows a moving particle that represents art, which moves in a particular pattern each holding a personal
                      meaning.This particle also move within a specifc world which represents its medium As the conserver, you are required to put in the work that allows you tow conserve the artefact,
                      but if you do not work hard enough, you will not be able to do so. If you do however manage to conserve the artefact you will observe these structural changes mentioned in the qoute.
                      
                      <ul>
                        <li>The first Change you will notive is the color of the art particle artwork. With each conservation the colour changes</li>
                        <li>The changing of the sky. This represents the change of mediums. The world of the artefact can never stay the same if it truly wishes to survive.
                            Stabilizing an artefact in one world will ultimatley lead to its end.
                        </li>
                        <li>
                            The change of the pattern. This is the last structural change that one can notice. this change is to show that despite being duplicatd and tranferred between 
                            mediums, I believe that each artefact is its own.
                        </li>
                      </ul>
                      That being said if one does fail to conserve the artwork it will die, and dissappear. For the purpose of this project, I removed the end state of the game, whereas the original design would have the player refreshing the site to start a new game.
                      Why I wanted the player to refresh the page, was simply due to fact that I wanted them to realise that once an artwork fails to be conserve it can not be retrieved. 
                      But as I said for the purpose fo this players will still be allowed to work and eventually continue the conservation porcess, essentially removing the end state completely. Why did I do This?
                      The answer is discussed in my reflection section...
                    </article>
                    <section className="netart__embeded">
                       <Netarttwo/>
                    </section>
                </section>
               
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
    );
   
  }
}