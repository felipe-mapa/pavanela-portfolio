import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWrench, faCoffee, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    return (
        <nav className="navigation">
            <input type="checkbox" className="navigation__toggle" id="nav-toggle" />

            <label id="nav-toggle-button" className="navigation__toggle-button" htmlFor="nav-toggle">
                <div className="navigation__hamburger navigation__hamburger--1"></div>
                <div className="navigation__hamburger navigation__hamburger--2"></div>
                <div className="navigation__hamburger navigation__hamburger--3"></div>
            </label>

            <div className="navigation__item">
                <a href="#header"><FontAwesomeIcon className="navigation__icon fa-fw" icon={faHome} /></a>
            </div>

            <div className="navigation__item">
                <a href="#header-2"><FontAwesomeIcon className="navigation__icon fa-fw" icon={faUserCircle} /></a>
            </div>

            <div className="navigation__item">
                <a href="#header-3"><FontAwesomeIcon className="navigation__icon fa-fw" icon={faWrench} /></a>
            </div>

            <div className="navigation__item">
                <a href="#header-4"><FontAwesomeIcon className="navigation__icon fa-fw" icon={faCoffee} /></a>
            </div>

            <div className="navigation__item">
                <a href="#header-5"><FontAwesomeIcon className="navigation__icon fa-fw" icon={faEnvelope} /></a>
            </div>
        </nav>
    )
}

export default About