import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const CategoriesBox = (props) => {
    const [sectionCategories, setSectionCategories] = useState("Categories__box")

    useEffect(() => {
        if (props.selected) {
            setSectionCategories("Categories__box Categories__box--selected")
        } else {
            setSectionCategories("Categories__box")
        }
    }, [props.selected])

    return (
        <Link to="Projects" smooth={true} offset={-60} duration={500}>
            <div className={sectionCategories} onClick={props.clicked} >
                {props.children}
                <h1 className="Categories__box--title">{props.type}</h1>
            </div>
        </Link>
    )
}

export default CategoriesBox