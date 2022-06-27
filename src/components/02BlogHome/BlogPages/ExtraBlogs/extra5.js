import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extra5 extends Component {
  render() {
    return (
      <section className='Blog-Text'>
        <h1>Technical Reflection III</h1>
        <h2>I Tried, I really Did...</h2>
        <article>
                With my main focus of this phase being the implementation of my net art, there was not enough time to improve on all my technical issues that already existed.
                Although, there are some stuff that also confused me. in the feedback report, it was mentioned that I need to review my blogcard.js file and focus on my use of semi-colons.
                I was not sure of this so I assumed it was the fact that I had none whenever I imported something. Another thing that confused me was that my use of functions was inconsistant.
                I assumed that this was the fact that I classes and then also functions in some of my files. If this was the case, for some reason, only certain feature worked when I used a class and other times only when
                is used a function. I tried to figure out why this was, which then lead me to the conclusion that the Link from the react-router-dom refused to work in the fucntion method.
                I am not sure why this was. When I tried to fix it, my site broke, so I decided to stick with what was working.
        </article>
        <h2>Whats Newww?</h2>
        <article>
            While there was no time to implement the shop feature for my netart, I was able to implement the quick items menu that served as a latest blog section.
            This was fairly easy to implement. What really through me off was that I wanted it to work with tooltips. I was not sure if we were allowed to use external libraries other than react, so it took me a while to figure out.
            In the end I decided to use a toolip that worked using only css. This turned out better then I expect, but also led to a huge delay as I first had to learn how to do.
            And even after thinking that I had it figured out, there was the issue of my tooltip not being rendered at all. Nevertheless it worked in the end.
        </article>
        <h2>Unity Prevented The Union of My Net Art</h2>
        <article>
            While the first game was uploaded successfully, I ran into a lot of issues thereafter. 
            These issues ranged from load times, to screen width, and ultimately the big crash.
            Some of the games had issues with there size, and this made load times unbearable when they were uploaded, I wanted to avoid this so keept taking it back trying to reduce the games as best I could.
            The second issue being the screen width, messed up the games UI making some games unplayable.
            Both of these first issues, had me playing around in unitys build settings and then that led to the issue of each build crashing before it could be completed.
            And now none of my projects want to build, including my personal projects.
        </article>
        <h2>Why Must There Always Be Issues</h2>
        <article>
            This is more of a personal issue that led to a huge delay in the porject, but with recent times, I have been experiencing more power outages.
            While last time the power outages were caused by load-shedding and cable theft, there is now a new variable, which is the people that moved in nextdoor.
            My neighborhood, has recently had a new complex pop up, but they are illegal stealing electricity, which was sorted out. But now since there electricity has been taken away someone
            decides to put our power off by going to the supply box. Basically I struggled finding the time to work, which is also why I could not book consultations because of the unpredictable
            issues of electricity.
        </article>
        <article>
            Another completely unrealted issue is that I wanted to embed some of my research papers through react, but could not really figure it out.
            At one point instead of displaying the document, the site would automatically start a download of the document, which I suspect would freak a lot of users out.
            So I just scrapped this idea, alothough I do think it could come in handy.
        </article>
        <article>
            Despite all this, I am proud of what I have produced, although I know with more time, I can improve it as well as implement the features I inteded for.
        </article>


            <section>
                <article>
               <button className='btn'><Link  to="/blogs">Back</Link></button>
               
               </article>
            </section>
      </section>
    )
  }
}
