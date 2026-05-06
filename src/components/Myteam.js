import React, { useRef, useState } from 'react'
import './Myteam.css'
import i1 from '../forAll/all/people1.png'
import i2 from '../forAll/all/people2.png'
import i3 from '../forAll/all/people3.png'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


export default function Myteam() {
  const list = [
    { img: i1, name: 'Gor Matoyan', span: 'Maneger' },
    { img: i2, name: 'Karine Zakharyan', span: 'Director'},
    { img: i3, name: 'Anna Petrosyan', span: 'Chef' }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  return (
    <div className='myteam'>
      <div className="container">
        <h2>My team</h2>
          <span className='left' onClick={prevSlide}><FaCircleChevronLeft /></span>
        <div className="content">
          <div className="detal" style={{ 
      transform: `translateX(-${currentIndex * (100 / 3)}%)` // Սա շարժում է սլայդը
    }}>
          {
            list.map((elem, index) => {
              return (
                <div className='item' key={index} style={{ background: ` url(${elem.img})` }}>
                  <div className='box'>
                    <h3>{elem.name}</h3>
                    <span>{elem.span}</span>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
          <span className='right' onClick={nextSlide}><FaCircleChevronRight /></span>
      </div>
    </div>
  )
}
