import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog4 extends Component {

    render(){
        return(
            <section className='Blog-Text'>
                
               <h1>Technical Reflection</h1>
               <article>
               <p>
                The purpose of this assignment was simple. 
                It was meant to teach us how to use react to create a basic website. 
                So, the purpose of this blog is to reflect on the technical aspect 
                of this assignment.  In the past few weeks, I have watched and attempted
                every practical lecture provided to us, while referring to other examples,
                code and videos as well. Using these skills obtained through these sources
                and material, I was tasked with creating a website. The website was to contain 
                simple features for the first phase of the assignment: a home page, a blog page
                with blogs, and a navigation system. 
                That being said before the development of this website,
                we were tasked with developing wireframes 
                and design our desired layouts. In the beginning it all 
                seemed simple. My thought process was clear. I knew what I
                wanted, and I thought I knew how I was going to achieve it. 
                When I first set foot into the waters of React, I found it to
                be much easier to use than to develop a site the way I did in 
                the interactive media course I took in third year. And for awhile
                everything was easy, make components and throw them in. While approaching
                these final stages of the first phase I came to the realization that: 
                “I am not as comfortable with this as I thought I was”. Don’t get me wrong,
                the basics of React is simple to use, it was when I attempted 
                (even though it was not necessary) to experiment, I would end up failing.
                React has however changes my experience with web development 
                tremendously since the last time I did it. That being said,
                I was able to achieve and understand concepts and functionality much better. 

               </p>
               </article>
               <h2>Functionality</h2>
               <article>
               <p>
               The functionality of my website at this stage is basic, with 
               simple navigation and simple responsiveness. Looking at the purpose 
               of this assignment, I believe that the functionality does meet the requirements. 
               The purpose for me was centred around the blogs, and I think the website is 
               sufficient for the needs of its audience. 
               </p>
               </article>
               <h2>Process</h2>
               <article>
               <p>
               My process was simple. I followed the practical given to us each week 
               and created the website adding something new on a weekly basis. This process 
               was however interrupted during the last week as electricity has been in an issue 
               not only due to loadshedding but due to a burnt down power station. I started creating
                the home page layout throughout these practical assessments, and when I finally learned 
                how to connect different pages everything else fell into place. 
               </p>
               </article>
               <h2>Achievements</h2>
               <article>
               <p>
                   With my previous course in interactive media, some aspect of web 
                   development never occurred to and when I learned about it, I was still 
                   confused about how to achieve it. With this assignment it was one of the 
                   first things I made sure to include. And that was responsiveness. Although 
                   I must it adapt the behaviour of the site according to the environment it is 
                   used, does still require work. </p>
                   </article>
               <h2>Conclusion</h2>
               <article>
               <p>
               Overall, I feel like my engagement with the material is 
               on a good level, however I would like to see myself 
               experimenting more with it. Improving on the layout of 
               my website as well. 

               </p>
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