import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <h2>Contact us</h2>
            <div className="content">
                <div className="item">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18037.10588444489!2d44.48130094166928!3d40.18524049230913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1772467783671!5m2!1sen!2sam" ></iframe>
                </div>
                <div className="item2">
                    <form action="#">
                    <input type="text" placeholder='Name'/>
                    <input type="tel" placeholder='Phone'/>
                    <input type="email" placeholder='Email'/>
                    <textarea name="" id="" placeholder='message'></textarea>
                    <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
