import React from 'react'
import './Service.css'
import i1 from '../forAll/icon/mig.png'
import i2 from '../forAll/icon/jel.png'
import i3 from '../forAll/icon/jim.png'

export default function Service() {
    const list = [
        { img: i1, title: 'Restaurant', text: 'Along with rest, you can taste the most delicious cuisine.' },
        { img: i2, title: 'Spa', text: 'Your vacation will become more pleasant by enjoying.' },
        { img: i3, title: 'Sport', text: "Always stay in good shape with a vacation with us." }
    ]

    
    return (
        <div className='service'>
            <div className="container">
                <h2>Service</h2>
                <div className="content">
                    {
                        list.map((elem, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="box"><img src={elem.img} alt="" /></div>
                                    <h3>{elem.title}</h3>
                                    <p>{elem.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
