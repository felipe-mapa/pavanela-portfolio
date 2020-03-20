import React from 'react'

import Animation from './Animation'

const Header = () => {

    return (
        <header className="header" id="header">
            <div className="header__text-box" id="header__text-box">
                <Animation />
                <h1 className="header__heading-sub heading-tertiary find-section">Full Stack Web and Mobile App Developer & Web Designer</h1>
                <a href="#header-2" className="btn btn__header">Find out more &#9654;</a>
            </div>
        </header>
    )
}

export default Header