import React from 'react'
import './Footer.css'
import logo from '../forAll/icon/downLogo.png'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";



export default function Footer() {

  const list = ['Home', 'Rooms', 'My team', 'Servise', 'About us', 'Feedback']

  return (
    <footer>
      <div className="container">
        <div className="content1">
          <img src={logo} alt="" />
          <div className="item">
            <BsInstagram />
            <FaFacebook />
            <FaTelegram />
          </div>
        </div>
        <ul>
          {
            list.map((elem, index) => {
              return (
                <li key={index}><a href="/">{elem}</a></li>
              )
            })
          }
        </ul>
        <div className="content2">
          <FiPhone />
          <div className="box">
            <span>Contact us</span>
            <p>+374 00 00 00 00</p>
            <p>+374 00 00 00 00</p>
          </div>

        </div>
      </div>

      <div className="detal">
       <div className="container">
        <span>All right resived</span>
        <span>Design by K. Sarukhanyan</span>
       </div>
      </div>
    </footer>
  )
}
