import React, { useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll'

import portfolioImage from '../../assets/img/portfolio.jpg'
import cuppeeImage from '../../assets/img/cuppee.jpg'
import teamImage from '../../assets/img/teamtoclean.jpg'
import weddingImage from '../../assets/img/wedding.jpg'
import flagwebImage from '../../assets/img/flagweb.jpg'
import mountImage from '../../assets/img/mount.jpg'
import flagfinderappImage from '../../assets/img/flagfinderapp.jpg'
import flagfinderARImage from '../../assets/img/flagfinderAR.jpg'
import survivingImage from '../../assets/img/surviving.jpg'
import vrmuseumImage from '../../assets/img/vrmuseum.jpeg'
import arAppImage from '../../assets/img/arapp.jpeg'

const Projects = (props) => {
    const data = [
        {
            title: 'Cuppee',
            type: ['Website'],
            image: cuppeeImage,
            link: 'https://www.cuppee-nz.com/',
            option: 'Go to page',
            description: 'A e-commerce website for a collapsible coffee cup. It was mainly coded in PHP with MySQL database and JavaScript for front end. I used Stripe for payments by connecting its API.'
        },
        {
            title: 'Wedding website',
            type: ['Website'],
            image: weddingImage,
            link: 'http://felipepavanela78601.ipage.com/suzieandfelipe/',
            option: 'Go to page',
            description: 'A bilingual (EN-PT) website created mainly with PHP connecting to a MySQL database. It has a customised and developed from scratch Customer Management System.'
        },
        {
            title: 'Flag Finder WebApp',
            type: ['Website'],
            image: flagwebImage,
            link: 'http://felipepavanela78601.ipage.com/test/',
            option: 'Go to page',
            description: 'The flag characteristics search engine was developed with React.js and backended with Wordpress. The headless data is shared with Flag Finder App.'
        },
        {
            title: 'Portfolio',
            type: ['Website'],
            image: portfolioImage,
            link: 'https://www.pavanela.com/',
            option: 'Go to page',
            description: 'Developed with React.js for front end, CSS(SASS) for design and PHP for email.'
        },
        // {
        //     title: 'Business Solution',
        //     type: ['Website'],
        //     image: webImage,
        //     link: ''
        // },
        {
            title: 'Mount Everest NZ',
            type: ['Website'],
            image: mountImage,
            link: 'https://mount-everest-nz.myshopify.com/',
            option: 'Go to page',
            description: 'Existing E-commerce shopify website where design and features were updated through theme and code (Liquid).'
        },
        {
            title: 'Team to Clean',
            type: ['Website'],
            image: teamImage,
            link: 'http://felipepavanela78601.ipage.com/teamtoclean/',
            option: 'Go to page',
            description: 'A simple single page website written only in HTML, CSS(SASS), JavaScript and PHP. I used JQuery to manipulate the HTML and to have the use of Ajax for the contact form to link JavaScript to PHP.',
        },
        // {
        //     title: 'Burger Project',
        //     type: ['Website'],
        //     image: webImage,
        //     link: ''
        // },
        {
            title: 'Flag Finder App',
            type: ['Mobile'],
            image: flagfinderappImage,
            link: 'https://play.google.com/store/apps/details?id=com.pavanela.flag_finder',
            option: 'Google Play',
            description: 'A flag characteristics search engine developed with React Native for android. The headless data is retrieved from the same database as Flag Finder website using Redux for management.'
        },
        {
            title: 'S. to Christmas',
            type: ['Mobile'],
            image: survivingImage,
            link: 'https://play.google.com/store/apps/details?id=felipe.pavanela.project.ames.ac.nz.survivingtochristmas',
            option: 'Google Play',
            description: 'A game project developed for AMES College with Android Studio.'
        },
        {
            title: 'Flag AR',
            type: ['Mobile', 'University'],
            image: flagfinderARImage,
            link: 'https://1drv.ms/u/s!Avhn0KmceqP_k4Qm0ACyPD2WpnH9yQ?e=S1A1R6',
            option: 'See Project',
            description: 'A android AR app developed with Unity (C#) and EasyAR for a university project. In this app, user places the phone camera in front of a flag to find out which country it is from. It is under development, so only few countries are set up. Attached (on See Project), you can see the whole documentation about the project and a study case using the application, you can also download the APK or see the video of it working. Next step is to integrate Flag Finder app once it is completed.'
        },
        {
            title: 'Interactive AR',
            type: ['Mobile', 'University'],
            image: arAppImage,
            link: 'https://1drv.ms/u/s!Avhn0KmceqP_k4QMurOASIV1X8xzaQ?e=K6zURs',
            option: 'See Project',
            description: 'A android Augmented Reality application developed with Unity (C#) and using Vuforia. It uses an image to trigger some 3D models modelled and animated with Maya. After model are placed on the virtual world, the object can be clicked and it will show an effect created with Unity Particle System.'
        },
        {
            title: 'VR Museum',
            type: ['Mobile', 'University'],
            image: vrmuseumImage,
            link: 'https://1drv.ms/u/s!Avhn0KmceqP_k4Qb6bJE-LjVwivd0w?e=rd7l7a',
            option: 'See Project',
            description: 'A Virtual Reality group project where we created what will be the next generation museum. We used Unity (C#) to code and develop the app, and Maya to model the scene and the objects. On the document attached (See Project), you can find the app (apk), the project proposal, a video of it working and the gitlab link for the project.'
        },
        // {
        //     title: 'VR World',
        //     type: ['Mobile', 'University'],
        //     image: webImage,
        //     link: '',
        //     option: 'Go to page'
        // },
    ]

    const [descriptionSelected, setDescriptionSelected] = useState("")
    const [descriptionNameSelected, setDescriptionNameSelected] = useState("")

    const listProjects = data.map((d, index) => {
        if (d.type.includes(props.selected)) {
            return (
                <div className="section-projects__box" key={index}>
                    <div>
                        <h1 className="section-projects__title">{d.title}</h1>
                        <img className="section-projects__img" src={d.image} alt={d.title} />
                        <div className="section-projects__button">
                            <Link 
                                offset={window.innerWidth < 550 ? -60 : -400} 
                                smooth={true} 
                                duration={500}
                                to="section-projects__description"
                                className="section-projects__button--icon" style={{ borderRight: '0.5px #E6E6E6 solid' }} 
                                onClick={() => descriptionChangeHandler(d)}>
                                See Details
                            </Link>
                            <a target="_blank" className="section-projects__button--icon" style={{ borderLeft: '0.5px #E6E6E6 solid' }} href={d.link}>{d.option}</a>
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
        <Element name="section-projects__description" className="section-projects__description">
            <h1 className="section-projects__title">Description of {descriptionNameSelected}</h1>
            <p className="paragraph">{descriptionSelected}</p>
        </Element>
    )

    const descriptionChangeHandler = (info) => {
        setDescriptionSelected(info.description)
        setDescriptionNameSelected(info.title)
    }

    return (
        <Element name="section-projects" className="section-projects find-section">
            <h1 className="heading-primary heading-primary--1" id="header-4">Projects</h1>
            <div className="section-projects__container" >
                {listProjects}
            </div>

            {descriptionSelected !== "" ? sectionDescription : null}
        </Element >
    )
}

export default Projects