import React from 'react'
import './About.css'
import i2 from '../forAll/all/foodBreakfast.png'
import i1 from '../forAll/all/compresse.png'

export default function About() {

    return (
        <div className='about'>
            <div className="container">
                <div className="content">
                    <h2>About us</h2>
                    <span>For all those looking for comfort and luxury<br />in one place</span>
                    <div className="textDiv">
                        <p>We welcome our guests in an atmosphere<br />of comfort and luxury. <br /> Our conditions allow you to <br />  choose a vacation that suits your budget</p>
                        <p>We welcome our guests in an atmosphere<br />of comfort and luxury. <br /> Our conditions allow you to <br />  choose a vacation that suits your budget</p>
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={i1} />
                </div>
                <img src={i2} className='img3' />
                <img src={i1} className='img2' />

            </div>
        </div>
    )
}
