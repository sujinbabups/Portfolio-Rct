import React from 'react'

import pic from '../assets/IMG_0577__1_-removebg-preview.png'

const About = () => {
  return (
    <>
    <div className="h-[400px] w-[700px] bg-blue-200 mx-auto p-[30px] rounded-3xl border-1 hover:border-blue-500" id="home">
    <img src={pic} className="w-[100px] float-right mt-[60px]"/>
    <p className="text-base font-bold">As a computer application graduate, my journey into the world of blockchain technology has been both unexpected and incredibly rewarding. After graduating, I attempted to pursue postgraduate studies but couldn't complete them. This led me to explore other avenues, and during a diploma course, I discovered the Certified Blockchain Architect course at Kerala Digital University.
        I am now enrolled in the Certified Blockchain Architect Course at Kerala Blockchain Academy. Although I had heard about blockchain before, my knowledge was limited. However, the supportive environment at KBA, along with the encouragement from the dedicated staff, has been instrumental in my learning journey.
        Their guidance has ignited my passion for blockchain technology, and I am eager to continue working and growing in this exciting field.
        <a href="https://duk.ac.in/" className="link">Kerala Digital University</a>.</p><br/><br/>
   


</div>
    
    </>
  )
}

export default About