import React from 'react'
import './Head.css'
import logo from '../../logo.svg';
import Watch from '../../boy.png'


const Head = () => {

    return (
        <div className='Head'>
            <div className="subhead">
                <div className="title">
                    <img className='logo' src={logo} alt />
                    <div>
                        <h3> SasCom </h3>
                    </div>
                </div>

                <div className="nav">
                    <div className="ul">
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Contat Us</li>
                            <li>Faq</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='he'>
                <div className="h1">
                    <h1> SasCom Tech, We deal in all Kinds
                          of Computers, Laptops, Desktops, NoteBook on windows,
                           Ios, Linux and repairs of all Kind</h1>
                           <div className="p">
                            <p>We also build Websites and teach Students on how to code on different languages</p>
                           </div>
                           <div className="button-div">
                            <button className='btn'> Buy Products</button>
                           </div>
                </div>
                <div className="right">
                    <img className='logo-laptop' src={Watch} alt />

                </div>
            </div>


        </div>
    )
}

export default Head