import React, { useState } from 'react'
import '../hero/Hero.css'

const Hero = () => {

    const [quote, setQuote] = useState('Does not grow on....')
    const handleCLick = () => {
        setQuote('Does not grow on trees')
    }

    return (
        <div className='hero'>
            <div className='content'>
                <p>Call us</p>
                <p>123-456-789</p>
                <p>Because Money</p>
                <p>{quote}</p>
                <button onClick={handleCLick} href='/' className='button'>Free Consultation  BOOK NOW</button>
            </div>
        </div>
    )
}

export default Hero