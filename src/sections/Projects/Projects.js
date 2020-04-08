import React, { useState } from 'react';
import { Link, Element, animateScroll as scroll  } from 'react-scroll'

import {projectsDB} from '../../store/projectsDB'

const Projects = (props) => {
    const [descriptionSelected, setDescriptionSelected] = useState("")
    const [descriptionNameSelected, setDescriptionNameSelected] = useState("")

    const listProjects = projectsDB.map((d, index) => {
        if (d.type.includes(props.selected)) {
            return (
                <div className="Projects__box" key={index}>
                    <div>
                        <h1 className="Projects__title">{d.title}</h1>
                        <img className="Projects__img" src={d.image} alt={d.title} />
                        <div className="Projects__button">
                            <Link 
                                offset={window.innerWidth < 550 ? -60 : -400} 
                                smooth={true} 
                                duration={500}
                                to="Projects__description"
                                className="Projects__button--icon" style={{ borderRight: '0.5px #E6E6E6 solid' }} 
                                onClick={() => descriptionChangeHandler(d)}>
                                See Details
                            </Link>
                            <a target="_blank" className="Projects__button--icon" style={{ borderLeft: '0.5px #E6E6E6 solid' }} href={d.link}>{d.option}</a>
                        </div>
                    </div>
                </div>)
        } else {
            return null
        }
    }).filter(function (el) {
        return el != null;
    })

    const sectionDescription = (
        <Element name="Projects__description" className="Projects__description">
            <h1 className="Projects__title">Description of {descriptionNameSelected}</h1>
            <p className="paragraph">{descriptionSelected}</p>
        </Element>
    )

    const descriptionChangeHandler = (info) => {
        setDescriptionSelected(info.description)
        setDescriptionNameSelected(info.title)
    }

    return (
        <Element name="Projects" className="Projects find-section">
            <h1 className="heading-primary heading-primary--1" id="header-4">Projects</h1>
            <div className="Projects__container" >
                {listProjects}
            </div>

            {descriptionSelected !== "" ? sectionDescription : null}
        </Element >
    )
}

export default Projects