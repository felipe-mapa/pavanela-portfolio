import React from 'react'

import webImage from '../../assets/img/web.jpg'
import mobImage from '../../assets/img/mob.png'
import uniImage from '../../assets/img/uni.jpg'

import CategoryImage from './CategoryImage'
import CategoryBox from './CategoryBox'

const Categories = (props) => {

    return (
        <section className="section-tools find-section">
            <h1 className="heading-primary heading-primary--2" id="header-3">Categories</h1>
            <div className="section-tools__container">
                <CategoryBox type="Websites" selected={props.selected === "Website"} clicked={props.changeCat.bind(this, "Website")}>
                    <CategoryImage image={webImage} />
                </CategoryBox>
                <CategoryBox type="Mobile Apps" selected={props.selected === "Mobile"} clicked={props.changeCat.bind(this, "Mobile")}>
                    <CategoryImage image={mobImage} />
                </CategoryBox>
                <CategoryBox type="Uni Projects" selected={props.selected === "University"} clicked={props.changeCat.bind(this, "University")}>
                    <CategoryImage image={uniImage} />
                </CategoryBox>
            </div>
        </section>
    )
}

export default Categories