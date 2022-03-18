import React from 'react'
import './Demo.css'

const Demo = (props) => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>{props.lorem.dummydata}</p>
                    <p>One Goal</p>
                    <p>{props.lorem.dummydata2}</p>
                    <button className='button'>Get your free financial analysis</button>
                </div>
                <div className='col-2'>
                    <iframe width='600' height='350' src={props.lorem.ytlink} title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo