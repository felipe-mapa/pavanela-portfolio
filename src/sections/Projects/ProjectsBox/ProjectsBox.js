import React, { useEffect, useState } from 'react'

const ProjectBox = (props) => {
    const [type, setType] = useState("ProjectsBox")

    useEffect(() => {
        if (props.selected) {
            setType("ProjectsBox ProjectsBox--selected")
        } else {
            setType("ProjectsBox")
        }
    }, [props.selected])

    return (
        <div>
            <div className={type} onClick={props.clicked} >
                {props.children}
                <h1 className="ProjectsBox--title">{props.type}</h1>
            </div>
        </div>
    )
}

export default ProjectBox