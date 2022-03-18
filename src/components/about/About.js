import React from 'react'
import guy from '../images/guy.png'
import '../about/About.css'

const About = (props) => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={guy} alt="guy" />
                <div className='col-2'>
                    <h2>About Us</h2>
                    <span className='line'></span>
                    <p>{props.lorem.dummydata}</p>
                    <p>{props.lorem.dummydata2}</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About