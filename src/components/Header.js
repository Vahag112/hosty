import React, { useEffect } from 'react'
import './Header.css'
import logo from '../forAll/icon/headerLogo.png'
import { FaBars } from 'react-icons/fa'
import { CiCircleRemove } from "react-icons/ci";
import { useRef } from 'react';


export default function Header() {
    const navList = ['Home', 'Service', 'Rooms', 'About Us', 'My team', 'Feedback', 'Contact Us']
    const nav = useRef()
    const headerRef = useRef()
    const barsRef = useRef()


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nav.current && !nav.current.contains(event.target) && !barsRef.current.contains(event.target)) {
                nav.current.classList.remove('active');
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 500) {
                headerRef.current.classList.add('hide')
                
            } else {
                headerRef.current.classList.remove('hide')
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll)

        return () =>{
            document.removeEventListener('mousedown' , handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
            
        } 
    }, [])

    return (
        <header ref={headerRef}>
            <div className="container">
             <img src={logo} alt="" />
                <nav ref={nav}>
                    <ul>
                        <div className="detal">
                            <img src={logo} alt="" />
                            <button className='delete' onClick={() => nav.current.classList.remove('active')}><CiCircleRemove /></button>
                        </div>
                        {
                            navList.map((elem, index) => {
                                return (
                                    <li key={index}>{elem}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <span className='bars' ref={barsRef} onClick={() => nav.current.classList.toggle('active')}><FaBars /></span>
            </div>
        </header>
    )
}
