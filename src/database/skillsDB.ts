import javaScriptImage from '../assets/logos/programmingLanguages/javaScript.png'
import cssImage from '../assets/logos/programmingLanguages/css.png'
import htmlImage from '../assets/logos/programmingLanguages/html.png'
import sassImage from '../assets/logos/programmingLanguages/sass.png'
import typeScriptImage from '../assets/logos/programmingLanguages/typeScript.png'
import phpImage from '../assets/logos/programmingLanguages/php.png'
import cSharpImage from '../assets/logos/programmingLanguages/cSharp.png'

import reactImage from '../assets/logos/frameworks/react.png'
import ionicImage from '../assets/logos/frameworks/ionic.png'
import expoImage from '../assets/logos/frameworks/expo.png'
import nextImage from '../assets/logos/frameworks/next.png'
import laravelImage from '../assets/logos/frameworks/laravel.png'

import reduxImage from '../assets/logos/libraries/redux.png'
import axiosImage from '../assets/logos/libraries/axios.png'
import routerImage from '../assets/logos/libraries/router.png'
import thunkImage from '../assets/logos/libraries/thunk.png'
import sagaImage from '../assets/logos/libraries/saga.png'
import jQueryImage from '../assets/logos/libraries/jquery.png'
import emailImage from '../assets/logos/libraries/email.png'
import bootstrapImage from '../assets/logos/libraries/bootstrap.png'
import materialImage from '../assets/logos/libraries/materialui.png'

import mySqlImage from '../assets/logos/database/mysql.png'
import sqLiteImage from '../assets/logos/database/sqlite.png'
import firebaseImage from '../assets/logos/database/firebase.png'
import mangoDBImage from '../assets/logos/database/mangodb.png'
import wordPressImage from '../assets/logos/database/wordpress.png'

import nodeJsImage from '../assets/logos/technologies/nodejs.png'
import ajaxImage from '../assets/logos/technologies/ajax.png'
import webpackImage from '../assets/logos/technologies/webpack.png'
import strapiImage from '../assets/logos/technologies/strapi.png'
import graphQlImage from '../assets/logos/technologies/graphql.png'
import apolloImage from '../assets/logos/technologies/apollo.png'
import npmImage from '../assets/logos/technologies/npm.png'
import composerImage from '../assets/logos/technologies/composer.png'

import gitImage from '../assets/logos/devOps/git.png'
import gitHubImage from '../assets/logos/devOps/github.png'
import gitLabImage from '../assets/logos/devOps/gitlab.png'
import azureImage from '../assets/logos/devOps/azure.png'
import gitKrakenImage from '../assets/logos/devOps/gitkraken.png'

import googleMapsImage from '../assets/logos/apis/googlemaps.png'
import adMobImage from '../assets/logos/apis/admob.png'
import adSenseImage from '../assets/logos/apis/adsense.png'
import stripeImage from '../assets/logos/apis/stripe.png'

import visualCodeImage from '../assets/logos/codeEditors/visualcode.png'
import androidStudioImage from '../assets/logos/codeEditors/androidstudio.png'
import unityImage from '../assets/logos/codeEditors/unity.png'

import trelloImage from '../assets/logos/taskTracking/trello.png'
import samePageImage from '../assets/logos/taskTracking/samepage.png'

interface Skill {
  title: string;
  img: string;
  category: string;
}

interface SkillState {
  skills: Skill[];
}

export const skillsDB: SkillState = {
  skills: [
    //Programming languages
    {
      title: "JavaScript(ES6)",
      img: javaScriptImage,
      category: "Programming Language"
    },
    {
      title: "CSS3",
      img: cssImage,
      category: "Programming Language"
    },
    {
      title: "SASS",
      img: sassImage,
      category: "Programming Language"
    },
    {
      title: "HTML5",
      img: htmlImage,
      category: "Programming Language"
    },
    {
      title: "TypeScript",
      img: typeScriptImage,
      category: "Programming Language"
    },
    {
      title: "PHP",
      img: phpImage,
      category: "Programming Language"
    },
    {
      title: "C#",
      img: cSharpImage,
      category: "Programming Language"
    },
    // Frameworks
    {
      title: "React.js",
      img: reactImage,
      category: "Framework"
    },
    {
      title: "Ionic",
      img: ionicImage,
      category: "Framework"
    },
    {
      title: "React Native",
      img: expoImage,
      category: "Framework"
    },
    {
      title: "Next.js",
      img: nextImage,
      category: "Framework"
    },
    {
      title: "Laravel",
      img: laravelImage,
      category: "Framework"
    },
    // Libraries
    {
      title: "Redux",
      img: reduxImage,
      category: "Library"
    },
    {
      title: "Router",
      img: routerImage,
      category: "Library"
    },
    {
      title: "Axios",
      img: axiosImage,
      category: "Library"
    },
    {
      title: "Thunk",
      img: thunkImage,
      category: "Library"
    },
    {
      title: "Saga",
      img: sagaImage,
      category: "Library"
    },
    {
      title: "JQuery",
      img: jQueryImage,
      category: "Library"
    },
    {
      title: "EmailJS",
      img: emailImage,
      category: "Library"
    },
    {
      title: "Bootstrap",
      img: bootstrapImage,
      category: "Library"
    },
    {
      title: "MaterialUI",
      img: materialImage,
      category: "Library"
    },
    //Databse
    {
        title: "MySQL",
        img: mySqlImage,
        category: "Database"
      },
      {
        title: "SQLite",
        img: sqLiteImage,
        category: "Database"
      },
      {
        title: "Firebase",
        img: firebaseImage,
        category: "Database"
      },
      {
        title: "MangoDB",
        img: mangoDBImage,
        category: "Database"
      },
      {
        title: "WordPress",
        img: wordPressImage,
        category: "Database"
      },
      // Technologies
      {
        title: "Node.js",
        img: nodeJsImage,
        category: "Technologies"
      },
      {
        title: "Ajax",
        img: ajaxImage,
        category: "Technologies"
      },
      {
        title: "Webpack",
        img: webpackImage,
        category: "Technologies"
      },
      {
        title: "Strapi",
        img: strapiImage,
        category: "Technologies"
      },
      {
        title: "GraphQL",
        img: graphQlImage,
        category: "Technologies"
      },
      {
        title: "Apollo",
        img: apolloImage,
        category: "Technologies"
      },
      {
        title: "NPM",
        img: npmImage,
        category: "Technologies"
      },
      {
        title: "Composer",
        img: composerImage,
        category: "Technologies"
      },
    // DevOps
      {
        title: "Git",
        img: gitImage,
        category: "DevOps"
      },
      {
        title: "GitHub",
        img: gitHubImage,
        category: "DevOps"
      },
      {
        title: "GitLab",
        img: gitLabImage,
        category: "DevOps"
      },
      {
        title: "Azure",
        img: azureImage,
        category: "DevOps"
      },
      {
        title: "GitKraken",
        img: gitKrakenImage,
        category: "DevOps"
      },
    // API
      {
        title: "Google Maps",
        img: googleMapsImage,
        category: "APIs"
      },
      {
        title: "AdMob",
        img: adMobImage,
        category: "APIs"
      },
      {
        title: "AdSense",
        img: adSenseImage,
        category: "APIs"
      },
      {
        title: "Stripe",
        img: stripeImage,
        category: "APIs"
      },
    // Source-code editor
      {
        title: "Visual Studio Code",
        img: visualCodeImage,
        category: "Studios"
      },
      {
        title: "Android Studio",
        img: androidStudioImage,
        category: "Studios"
      },
      {
        title: "Unity",
        img: unityImage,
        category: "Studios"
      },
    // Task tracking
      {
        title: "Trello",
        img: trelloImage,
        category: "Task Tracking"
      },
      {
        title: "SamePage",
        img: samePageImage,
        category: "Task Tracking"
      },
  ],
};
