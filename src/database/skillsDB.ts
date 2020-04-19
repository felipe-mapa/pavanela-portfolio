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
//import thunkImage from '../assets/logos/libraries/thunk.png'
import sagaImage from '../assets/logos/libraries/saga.png'
import jQueryImage from '../assets/logos/libraries/jquery.png'
//import emailImage from '../assets/logos/libraries/email.png'
import bootstrapImage from '../assets/logos/libraries/bootstrap.png'
import materialImage from '../assets/logos/libraries/materialui.png'

// import mySqlImage from '../assets/logos/database/mysql.png'
// import sqLiteImage from '../assets/logos/database/sqlite.png'
// import firebaseImage from '../assets/logos/database/firebase.png'
// import mangoDBImage from '../assets/logos/database/mangodb.png'
// import wordPressImage from '../assets/logos/database/wordpress.png'

// import nodeJsImage from '../assets/logos/technologies/nodejs.png'
// import ajaxImage from '../assets/logos/technologies/ajax.png'
// import webpackImage from '../assets/logos/technologies/webpack.png'
// import strapiImage from '../assets/logos/technologies/strapi.png'
// import graphQlImage from '../assets/logos/technologies/graphql.png'
// import apolloImage from '../assets/logos/technologies/apollo.png'
// import npmImage from '../assets/logos/technologies/npm.png'
// import composerImage from '../assets/logos/technologies/composer.png'

// import gitImage from '../assets/logos/devOps/git.png'
// import gitHubImage from '../assets/logos/devOps/gihHub.png'
// import gitLabImage from '../assets/logos/devOps/gitlab.png'
// import azureImage from '../assets/logos/devOps/azure.png'
// import gitKrakenImage from '../assets/logos/devOps/gitkraken.png'

// import googleMapsImage from '../assets/logos/apis/googlemaps.png'
// import adMobImage from '../assets/logos/apis/admob.png'
// import adSenseImage from '../assets/logos/apis/adsense.png'
// import stripeImage from '../assets/logos/apis/npm.png'

// import visualCodeImage from '../assets/logos/codeEditors/visualcode.png'
// import androidStudioImage from '../assets/logos/codeEditors/androidstudio.png'
// import unityImage from '../assets/logos/codeEditors/unity.png'

// import trelloImage from '../assets/logos/taskTracking/trello.png'
// import samePageImage from '../assets/logos/taskTracking/samepage.png'

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
      category: "programming_language"
    },
    {
      title: "CSS3",
      img: cssImage,
      category: "programming_language"
    },
    {
      title: "SASS",
      img: sassImage,
      category: "programming_language"
    },
    {
      title: "HTML5",
      img: htmlImage,
      category: "programming_language"
    },
    {
      title: "TypeScript",
      img: typeScriptImage,
      category: "programming_language"
    },
    {
      title: "PHP",
      img: phpImage,
      category: "programming_language"
    },
    {
      title: "C#",
      img: cSharpImage,
      category: "programming_language"
    },
    // Frameworks
    {
      title: "React.js",
      img: reactImage,
      category: "framework"
    },
    {
      title: "Ionic",
      img: ionicImage,
      category: "framework"
    },
    {
      title: "React Native",
      img: expoImage,
      category: "framework"
    },
    {
      title: "Next.js",
      img: nextImage,
      category: "framework"
    },
    {
      title: "Laravel",
      img: laravelImage,
      category: "framework"
    },
    // Libraries
    {
      title: "Redux",
      img: reduxImage,
      category: "library"
    },
    {
      title: "Router",
      img: routerImage,
      category: "library"
    },
    {
      title: "Axios",
      img: axiosImage,
      category: "library"
    },
    // {
    //   title: "Thunk",
    //   img: thunkImage,
    //   category: "library"
    // },
    {
      title: "Saga",
      img: sagaImage,
      category: "library"
    },
    {
      title: "JQuery",
      img: jQueryImage,
      category: "library"
    },
    // {
    //   title: "EmailJS",
    //   img: emailImage,
    //   category: "library"
    // },
    {
      title: "Bootstrap",
      img: bootstrapImage,
      category: "library"
    },
    {
      title: "MaterialUI",
      img: materialImage,
      category: "library"
    },
    // //Databse
    // {
    //     title: "MySQL",
    //     img: mySqlImage,
    //     category: "Database"
    //   },
    //   {
    //     title: "SQLite",
    //     img: sqLiteImage,
    //     category: "Database"
    //   },
    //   {
    //     title: "Firebase",
    //     img: firebaseImage,
    //     category: "Database"
    //   },
    //   {
    //     title: "MangoDB",
    //     img: mangoDBImage,
    //     category: "Database"
    //   },
    //   {
    //     title: "WordPress",
    //     img: wordPressImage,
    //     category: "Database"
    //   },



    //   // Technologies
    //   {
    //     title: "Node.js",
    //     img: nodeJsImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "Ajax",
    //     img: ajaxImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "Webpack",
    //     img: webpackImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "Strapi",
    //     img: strapiImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "GraphQL",
    //     img: graphQlImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "Apollo",
    //     img: apolloImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "NPM",
    //     img: npmImage,
    //     category: "technology"
    //   },
    //   {
    //     title: "Composer",
    //     img: composerImage,
    //     category: "technology"
    //   },
    //   // DevOps
    //   {
    //     title: "Git",
    //     img: gitImage,
    //     category: "devOp"
    //   },
    //   {
    //     title: "GitHub",
    //     img: gitHubImage,
    //     category: "devOp"
    //   },
    //   {
    //     title: "GitLab",
    //     img: gitLabImage,
    //     category: "devOp"
    //   },
    //   {
    //     title: "Azure",
    //     img: azureImage,
    //     category: "devOp"
    //   },
    //   {
    //     title: "GitKraken",
    //     img: gitKrakenImage,
    //     category: "devOp"
    //   },
    //   // API
    //   {
    //     title: "Google Maps",
    //     img: googleMapsImage,
    //     category: "api"
    //   },
    //   {
    //     title: "AdMob",
    //     img: adMobImage,
    //     category: "api"
    //   },
    //   {
    //     title: "AdSense",
    //     img: adSenseImage,
    //     category: "api"
    //   },
    //   {
    //     title: "Stripe",
    //     img: stripeImage,
    //     category: "api"
    //   },
    //   // Source-code editor
    //   {
    //     title: "Visual Studio Code",
    //     img: visualCodeImage,
    //     category: "sourceCode"
    //   },
    //   {
    //     title: "Android Studio",
    //     img: androidStudioImage,
    //     category: "sourceCode"
    //   },
    //   {
    //     title: "Unity",
    //     img: unityImage,
    //     category: "sourceCode"
    //   },
    //   // Task tracking
    //   {
    //     title: "Trello",
    //     img: trelloImage,
    //     category: "taskTracker"
    //   },
    //   {
    //     title: "SamePage",
    //     img: samePageImage,
    //     category: "taskTracker"
    //   },
  ],
};
