import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../forAll/icon/headerLogo.png'
import { FaBars } from 'react-icons/fa'
import { CiCircleRemove } from "react-icons/ci";
import { useRef } from 'react';


export default function Header() {
    const navList = ['Home', 'Service', 'Rooms', 'About Us', 'My team', 'Feedback', 'Contact Us']
    const[list, setList] = useState(false)
    const [hide,setHide] = useState(false)
    const navRef = useRef()
    const barsRef = useRef()


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && barsRef.current && !barsRef.current.contains(event.target)) {
                setList(false);
            }
        }

        const handleScroll = () => {
            setHide(window.scrollY > 500)
        }
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll)

        return () =>{
            document.removeEventListener('mousedown' , handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
            
        } 
    }, [])


    useEffect(() => {
    if (list) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
}, [list]);

    return (
        <header className={hide ? 'hide' : ''}>
            <div className="container">
             <img src={logo} alt="" />
             {list && <div className="overlay" onClick={() => setList(false)}></div>}
                <nav className={list ? 'active' : ''} ref={navRef}>
                    <ul>
                        <div className="detal">
                            <img src={logo} alt="" />
                            <button className='delete' onClick={() => setList(!list)}><CiCircleRemove /></button>
                        </div>
                        {
                            navList.map((elem, index) => {
                                return (
                                    <li key={index}><a href="/">{elem}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <span className='bars' ref={barsRef} onClick={(e) => {
                    setList(!list)
                }}><FaBars /></span>
            </div>
        </header>
    )
}
