import React from 'react'

import webImage from '../../assets/img/web.jpg'
import mobImage from '../../assets/img/mob.png'
import uniImage from '../../assets/img/uni.jpg'

import CategoryBox from './CategoryBox'

const Categories = (props) => {
    return (
        <section className="Categories find-section">
            <h1 className="heading-primary heading-primary--2" id="header-3">Categories</h1>
            <div className="Categories__container">
                <CategoryBox type="Websites" selected={props.selected === "Website"} clicked={props.changeCat.bind(this, "Website")}>
                    <img src={webImage} alt="" className="Categories__image" />
                </CategoryBox>
                <CategoryBox type="Mobile Apps" selected={props.selected === "Mobile"} clicked={props.changeCat.bind(this, "Mobile")}>
                    <img src={mobImage} alt="" className="Categories__image" />
                </CategoryBox>
                <CategoryBox type="Uni Projects" selected={props.selected === "University"} clicked={props.changeCat.bind(this, "University")}>
                    <img src={uniImage} alt="" className="Categories__image" />
                </CategoryBox>
            </div>
        </section>
    )
}

export default Categories