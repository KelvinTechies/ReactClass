import React from 'react'
import img from '../../why.png'
import './About.css'
import Checker from '../Checker/Checker'
import check from '../../check'

function About() {
    const newdata = check.map((item) => {
        return (
            <Checker
                id={item.id}
                img={item.img}
                desc={item.desc}
            />
        )
    })

        
    return (
        <div className='About'>
            <div className="abtBx">
                <div className="imgbx">
                    <img className='logo' src={img} alt />

                </div>
                <div className="rightAbt">
                    <h1>About The Product </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium commodi dolor voluptatibus iusto numquam autem unde delectus recusandae reprehenderit!</p>
                    <div className="check">
{newdata}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
