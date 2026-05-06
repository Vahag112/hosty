import React from 'react'
import './Rooms.css'
import i1 from '../forAll/all/1.png'
import i2 from '../forAll/all/2.png'
import i3 from '../forAll/all/3.png'
import i4 from '../forAll/all/4.png'

export default function Rooms() {

    const list = [
        {img:i1 , title: 'Single room', text:'These rooms are assigned to one person'                   , price: '20000 AMD'},
        {img:i2 , title: 'Double room', text:'Double rooms are assigned to two people'                  , price: '45000 AMD'},
        {img:i3 , title: 'Triple room', text:'As the name might suggest, this room is equipped for...'  , price: '65000 AMD'},
        {img:i4 , title: 'Deluxe room', text:'These rooms might be a bit bigger with slightly'          , price: '70000 AMD'},
    ]

    return (
        <div className='rooms'>
            <div className="container">
                <h2>Rooms</h2>
                <div className="content">
                    {
                        list.map((elem,index) => {
                            return(
                                <div className="item" key={index}>
                                    <img src={elem.img} alt="" />
                                    <h3>{elem.title}</h3>
                                    <p>{elem.text}</p>
                                    <span>{elem.price}</span>
                                    <button>See more</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
