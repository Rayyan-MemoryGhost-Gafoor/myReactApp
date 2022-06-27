import React from "react";
import ReactDOM from "react-dom";
import "./Design.css";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.png";
import seven from "./7.jpg";
import w1 from "./w1.jpg";
import w2 from "./w2.jpg";
import w3 from "./w3.jpg";
import { GiFox } from 'react-icons/gi';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';


export default class Design extends React.Component {
  render() {
    return (
        <section className="main__container">
            
            <section className="design__container">
                <h2>Design</h2>
                <h5>This essentially serves as my internet Preparatory work</h5>
                <section className="design__text">
                        <article>
                            <h1>What Do I Want?</h1>
                            With regards to the design of the overall site, I want my website to essentially be my internet art.
                            That being said, My core theme and focus is "Games". My design will draw inspiration from Game UI, in an attempt to give 
                            the user a similar experience as they would when playing a game. I will be adopting game elements throughout the development of this project, and designing them 
                            to fit in with the theme of my website. That being said, I will be doing research throughout the next phase of this project, i will be focusing on
                            non-diegetic and meta UI elements 
                        </article>
                        <h2>Game Element</h2>
                        <article>
                            <h2>Game Elements Implemented </h2>
                            <h3>Pause Menu(Non-Diegetic)</h3>
                            <img className="design__img" src={four}></img>
                            <article>
                            Instead of a traditional navigation bar, my design makes use of a pause button, which essentially serves as the navigation bar, while also creating that game experience
                            of pausing in the middle of a game. The pause menu also makes use of another game element, The Map. This map serves as a fast travel option to visualise the navigation of the website.
                            </article>
                            <h3>Character Menu(Non-Diegetic)</h3>
                            <img className="design__img" src={one}></img>
                            <img className="design__img" src={three}></img>
                            <article>
                            The Character Menu serves as the about section for my website. This section makes use of both game elements and layouts while telling you a little about me. 
                            This was supposed to serve as a cv type section, but I have a section which takes you to my actual cv website.
                            </article>
                            <h3>Blog Card (Meta)</h3>
                            <img className="design__img" src={two}></img>
                            <img className="design__img" src={six}></img>
                            <article>
                            Focusing more on the blog cards or any other card like element that I
                            will use, I wanted to have something that goes along with and strengthens
                            the theme. So I thought of how games use character cards throughout
                            their design phase and sometimes in game as well. These blog cards serve as the analogue aspect of games.
                            </article>
                        </article>
                        <article>
                            <h2>Game Elements To Be Implemented</h2>
                            <h3>Quick Items (Quick access menu) (Non-Diegetic)</h3>
                            <article>
                            While this UI, normally allows players to quickly select and use items.
                            This will serve as quick navigation to the latest blog posts. 
                            </article>
                            <h3>Item Shop (Meta)</h3>
                            <article>
                            While this will remain optional, and only be implemented if there is time.
                            I want to create a store within the website, which the player can use to buy potions/keys
                            These potions/keys will then be used as energy-to-read/ to gain access to blog posts.
                            </article>
                        </article>
                        <h2>Wireframes</h2>
                        <article>
                        I like to think of my wireframes as living entities. 
                        They are ever changing to accommodate for new design ideas. that being said, the following wireframes are very different from what I envisioned when I 
                        first designed this website.  I would like to also say that this page will also change if there are any changes through the development of this project.
                        <div className="design__img__holder">
                        <img className="design__wireframe" src={w1}></img>
                        <img className="design__wireframe__alt" src={w2}></img>
                        <img className="design__wireframe" src={w3}></img>
                        </div>
                        
                        </article>
                        
                        
                        <h2>Internet Art</h2>
                        <article>
                        Aside from my website, to add to this interactive art experience and essentially serves as a piece of net art on its own, I will be designing 
                        small games that will be embedded in the net art section of this website. To know more about this, please navigate to the net art age.
                        These games will be created in Unity and built using Unity's WebGL, which could also benefit me in the long run.
                        What concerns me about doing things this way is, is actually embedding the Unity WebGL build using the React Unity WebGL.
                        If I do however fail to do this now, I will be using Simmer.io as a short term solution to this problem. 
                        </article>
                        <h2>Colour Scheme</h2>
                        <img className="design__img" src={five}></img>
                        <img className="design__img" src={seven}></img>
                        <article>
                            As I have stated in by design reflection blog. I wanted to the colour
                            scheme to tell the user a little about me. Which Is why I intended for a
                            colour scheme that revolves around red (crimson). While doing this I
                            hope to keep in mind the psychological effect colours can have on
                            humans.
                        </article>
                </section>
                <section>
                     <h5>References</h5>
                     <section>
                     <h5>blog cards</h5>
                     <ul>
                         <li>
                         <cite>https://za.pinterest.com/pin/692921092684795394/</cite>
                         </li>
                         <li>
                         <cite>https://za.pinterest.com/pin/692921092684873059/</cite>
                         </li>
                         <li>
                         <cite>https://za.pinterest.com/pin/AQOMNslsqtcHvdanVa-GPq9Vv7YdxZUKwKJ46v_4_pjWzF-KmUabdFQ/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684794978/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684794847/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684795140/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684794790/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684795101/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684795084/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684795048/</cite>
                         </li>
                         <li>
                             <cite>https://za.pinterest.com/pin/692921092684794779/</cite>
                         </li>
                     </ul>
                     </section>
                     <section>
                         <h5>Used Throughout site</h5>
                         <li>
                                 <cite>https://za.pinterest.com/pin/692921092684809851/</cite>
                        </li>
                        <li>
                            <cite>https://za.pinterest.com/pin/692921092684794721/</cite>
                        </li>
                        <li>
                            <cite>https://za.pinterest.com/pin/692921092684795118/</cite>
                        </li>
                     </section>
                     <section>
                         <h5>Inspirations</h5>
                         <ul>
                             <li>
                                 <cite>https://za.pinterest.com/pin/692921092684770426/</cite>
                             </li>
                             <li>
                                 <cite>https://za.pinterest.com/pin/692921092683977510/</cite>
                             </li>
                             <li>
                                 <cite>https://za.pinterest.com/pin/75646468733891677/</cite>
                             </li>
                             <li>
                                 <cite>https://za.pinterest.com/pin/3448137202034749/</cite>
                             </li>
                             <li>
                                 <cite>https://za.pinterest.com/pin/5136987063709583/</cite>
                             </li>
                             <li>
                                 <cite>https://www.pinterest.ca/pin/308004062021745005/</cite>
                             </li>
                             <li>
                                 <cite>https://www.pinterest.ca/pin/63754150965413175/</cite>
                             </li>
                         </ul>
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
