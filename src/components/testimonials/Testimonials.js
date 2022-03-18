import React from 'react'
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'
import './Testimonials.css'

const Testimonials = (props) => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>{props.data[0].description}</p>
                        <p><span>{props.data[0].name}</span></p>
                        <p>{props.data[0].title}</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>{props.data[1].description}</p>
                        <p><span>{props.data[1].name}</span></p>
                        <p>{props.data[1].title}</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>{props.data[2].description}</p>
                        <p><span>{props.data[2].name}</span></p>
                        <p>{props.data[2].title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials