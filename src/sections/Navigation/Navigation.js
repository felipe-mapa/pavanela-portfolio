import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faWrench, faCoffee, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav className="Navigation">
            <input type="checkbox" className="Navigation__toggle" id="nav-toggle" />

            <label id="nav-toggle-button" className="Navigation__toggle-button" htmlFor="nav-toggle">
                <div className="Navigation__hamburger Navigation__hamburger--1"></div>
                <div className="Navigation__hamburger Navigation__hamburger--2"></div>
                <div className="Navigation__hamburger Navigation__hamburger--3"></div>
            </label>

            <div className="Navigation__item">
                <a href="#header"><FontAwesomeIcon className="Navigation__icon fa-fw" icon={faHome} /></a>
            </div>

            <div className="Navigation__item">
                <a href="#header-2"><FontAwesomeIcon className="Navigation__icon fa-fw" icon={faUserCircle} /></a>
            </div>

            <div className="Navigation__item">
                <a href="#header-3"><FontAwesomeIcon className="Navigation__icon fa-fw" icon={faWrench} /></a>
            </div>

            <div className="Navigation__item">
                <a href="#header-4"><FontAwesomeIcon className="Navigation__icon fa-fw" icon={faCoffee} /></a>
            </div>

            <div className="Navigation__item">
                <a href="#header-5"><FontAwesomeIcon className="Navigation__icon fa-fw" icon={faEnvelope} /></a>
            </div>
        </nav>
    )
}

export default Navigation