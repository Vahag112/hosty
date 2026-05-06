import React from 'react'
import './Think.css'
import i1 from '../forAll/all/mini1.png'
import i2 from '../forAll/all/mini2.png'
import i3 from '../forAll/all/mini3.png'
import i4 from '../forAll/all/mini4.png'

export default function Think() {
  const list = [
    {img: i1, name:'ARAM'  },
    {img: i2, name:'NAREK' },
    {img: i3, name:'ARPI'  },
    {img: i4, name:'MARIAM'}
  ]

  return (
    <div className='think'>
        <div className="container">
          <h2>What People Think About Us</h2>
          <div className="content">
              {
                list.map((elem,index) => {
                  return(
                    <div className="item" key={index}>
                      <img src={elem.img} alt="" />
                      <h3>{elem.name}</h3>
                      <p>Superior service, comfortable,<br /> luxurious guest house</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}
