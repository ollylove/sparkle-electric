'use client'
import { palatino } from "../ui/Fonts";
import { montserrat } from "../ui/Fonts";
import { useState, useRef } from "react";

export default function Contact() {
    const [success, setSuccess] = useState(false)
    const name = useRef(0)
    const email = useRef(0)
    const phone = useRef(0)
    const textarea = useRef(0)
    function handleClick(e) {
        if (name.current.value != '' && email.current.value != '' && phone.current.value != '' && textarea.current.value != '') {
            e.preventDefault()
            setSuccess(true)
        }
    }
    return (
        <section className="contacts">
            <div className="contacts-wrapper">
                <h5 className={palatino.className + ' text-left'}>Book a service call</h5>
                <h2 className={montserrat.className + ' text-left'}>Contact Us</h2>
                <form className={success ? 'hide' : ''}>
                    <div>
                        <input type="text" name="name" ref={name} placeholder="Enter your name *" required />
                        <input type="email" name="email" ref={email} placeholder="Enter your email *" required />
                        <input type="phone" name="phone" ref={phone} placeholder="Enter your phone number *" required />
                        <input type="text" name="address" placeholder="Enter your address" />
                        <input type="text" name="city" placeholder="Enter your city" />
                        <input type="text" name="zip" placeholder="Enter your zip code" />
                    </div>
                    <div>
                        <p className={montserrat.className}><strong>Urgency</strong></p>
                        <label className={montserrat.className}>
                            <input type="radio" name='urgency' /> Preventive Maintenance
                        </label>
                        <label className={montserrat.className}>
                            <input type="radio" name='urgency' /> Not urgent
                        </label>
                        <label className={montserrat.className}>
                            <input type="radio" name='urgency' /> Immediate
                        </label>
                        <label className={montserrat.className}>
                            <input type="radio" name='urgency' /> Emergency
                        </label>
                        <label className={montserrat.className}>
                            <input type="radio" name='urgency' /> Other
                        </label>
                        <textarea placeholder="Describe your problem or services needed" ref={textarea} rows='2' required></textarea>
                        <button type="submit" className={montserrat.className + " button text1-bg"} onClick={handleClick}>Submit</button>
                    </div>
                </form>
                <div className={success ? 'success' : 'success hide'}>
                    <h3 className={montserrat.className}>Thank you!</h3>
                    <h2 className={montserrat.className}>Your message was successfully sent!</h2>
                    <h4 className={montserrat.className}>We will get back to you as soon as possible</h4>
                </div>
            </div>
        </section>
    )
}
