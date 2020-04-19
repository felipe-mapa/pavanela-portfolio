import React from 'react'

import Animation from './Animation'

const Header = () => {

    return (
        <header className="Header" id="header">
            <div className="Header__text-box" id="Header__text-box">
                <Animation />
                <h1 className="Header__heading-sub heading-tertiary find-section">Web and Mobile App Developer</h1>
                <a href="#header-2" className="btn btn__header">Find out more &#9654;</a>
            </div>
        </header>
    )
}

export default Header