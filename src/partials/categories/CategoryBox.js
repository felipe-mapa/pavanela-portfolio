import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'

const CategoriesBox = (props) => {
    const [sectionTools, setSectionTools] = useState("section-tools__box")

    useEffect(() => {
        if (props.selected) {
            setSectionTools("section-tools__box section-tools__box--selected")
        } else {
            setSectionTools("section-tools__box")
        }
    }, [props.selected])

    return (
        <Link to="section-projects" smooth={true} offset={-60} duration={500}>
            <div className={sectionTools} onClick={props.clicked} >
                {props.children}
                <h1 className="selection-tools__box--title">{props.type}</h1>
            </div>
        </Link>
    )
}

export default CategoriesBox