import React from "react";
import ReactDOM from "react-dom";
import Netart from "./Netart";
import NetArt2 from "./NetArt2";
import "./NetArt.css"


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
                {/* <section className="netart__project">
                    <article className="netart__explain">
                    
                    </article>
                    <section className="netart__embeded">
                    </section>
                </section> */}
            </section>
        </section>
    );
   
  }
}