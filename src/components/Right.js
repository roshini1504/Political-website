import React from 'react'
import image2 from '../components/image1.jpeg';
import './Right.css';
const Right = () => {
  return (
    <div className='right container'>
       <div className='right-text'>
        <h1>We Ensure better education for a better world</h1>
        <img src={image2} alt="Right Component" className="right-image" />
        <p>Our cutting_edge curriclum is designed to empower students with the knowledge, skills, and 
            experiences needed to excel in the dynamic field of education
        </p>
       
       </div>
    </div>
  )
}

export default Right;