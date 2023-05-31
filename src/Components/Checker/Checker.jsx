import React from 'react'
import './Checker.css'

function Checker(props) {
    console.log(props)
    return (
        <div className='checkers'>
            <img src={`../Asset/${props.img}`}  alt="" />
            <p>{props.desc}</p>
            
        </div>
    )
}

export default Checker
