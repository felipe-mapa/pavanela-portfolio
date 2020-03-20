import React, { useState } from 'react'
import Recaptcha from 'react-recaptcha'
import { isValidES3Identifier } from '@babel/types'

const Footer = () => {

    const [isVerified, setIsVerified] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmition = () => {
        if (!isVerified) {
            alert('Please verify reCaptcha')
        } 
    }

    const verifyRecaptcha = (response) => {
        if (response) {
            setIsVerified(true)
        }
    }

    const recaptchaLoaded = () => {
        //console.log("recaptcha was loaded");
    }

    return (
        <footer className="footer find-section">
            <h1 className="heading-primary heading-primary--2 nomargin" id="header-5">Contact me</h1>
            <div className="footer__container">
                <div className="footer__form">
                    <form className="contact__form form" method="post" action="mail.php">

                        <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">
                            Your message was sent successfully.
                        </div>

                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Full Name" 
                                name="name" value={name} onChange={onNameChange} required />
                            <label htmlFor="name" className="form__label">Full name</label>
                        </div>

                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="Email address" 
                                name="email" value={email} onChange={onEmailChange} required />
                            <label htmlFor="email" className="form__label">Email address</label>
                        </div>

                        <div className="form__group">
                            <textarea rows="6" className="form__input" name="message" value={message} onChange={onMessageChange}
                                placeholder="Please leave your message here..." type="text" required></textarea>
                            <label htmlFor="message" className="form__label form__label--message">Message</label>
                        </div>

                        <div className="form__group">
                            <Recaptcha
                                sitekey="6Ldofd4UAAAAAKnS9siHtxA_7lZ7MFAmRKTbxCis"
                                render="explicit"
                                onloadCallback={recaptchaLoaded}
                                verifyCallback={verifyRecaptcha}
                                theme="dark"
                            />
                        </div>

                        <div className="form__group">
                            <input id="form__submission" className="btn form__submition" name="submit" type={isVerified ? "submit" : null} value="Send &#9654;" readOnly onClick={handleSubmition} />
                        </div>
                    </form>
                </div>
                <div className="footer__right">
                    <p className="footer__right--info">
                        Need help designing or putting together a new website, or does your current
                        website need a makeover? Let me know what you need and I'll see how I can help.
                        <br />I respond to all messages within 48 hours.
                    </p>
                    <p className="footer__right--info">
                        Leave a message on the contact form or feel free to contact me directly on my email or cell phone:
                        <br />&bull; <a type="email" href="mailto:felipe@pavanela.com">felipe@pavanela.com</a>
                        <br />&bull; <a type="phone" href="tel:+64 0276063705">+64 027 606 3705</a>
                    </p>
                    <p className="footer__right--copyright">&copy; 2020 by Felipe Pavanela.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer