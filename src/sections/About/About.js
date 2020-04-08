import React, { useState } from 'react'
import profileImage from '../../assets/img/felipe-profile-picture.jpg'

const About = () => {
    const [profImage, setProfImage] = useState(true)

    const imageError = () => {
        setProfImage(false)
    }

    return (
        <section className="About find-section">
            <h1 className="heading-primary heading-primary--1" id="header-2">Who I am</h1>
            <div className="About__shape">
                {profImage ? <img onError={imageError} src={profileImage} alt="" className="About__picture"/> : null}
                <p className="About__description paragraph">
                    Hi there, welcome to my portfolio.
                    I am a freelancer, full stack web developer looking forward to making your dream website come true.
                    Originally from Brazil, I moved to Australia at 18 years old where I got my Software Development Diploma.
                    And now, at 23, I am in New Zealand finishing my Bachelor of Creative Software.
                    My main goal on my projects is to give them a unique and modern look that will stand out from other websites.
                    My perfectionist eyes will check every pixel and make the page look great.
                </p>
            </div>
        </section>
    )
}

export default About