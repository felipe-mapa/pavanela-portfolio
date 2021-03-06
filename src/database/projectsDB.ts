import twlImage from "../assets/img/twl.jpg";
import cuppeeImage from "../assets/img/cuppee.jpg";
import teamImage from "../assets/img/teamtoclean.jpg";
import flagwebImage from "../assets/img/flagweb.jpg";
import mountImage from "../assets/img/mount.jpg";
import flagfinderappImage from "../assets/img/flagfinderapp.jpg";
import flagfinderARImage from "../assets/img/flagfinderAR.jpg";
import survivingImage from "../assets/img/surviving.jpg";
import vrmuseumImage from "../assets/img/vrmuseum.jpeg";
import arAppImage from "../assets/img/arapp.jpeg";
import metOceanImage from "../assets/img/metOceanApp.jpg";
import userlistImage from "../assets/img/userlistapp.jpg";

interface Project {
  title: string;
  type: string;
  image: string;
  option: string;
  description: string;
  skills: Array<string>;
  link: string;
  gitHub: string | null;
}

interface ProjectState {
  projects: Project[];
}

export const projectsDB: ProjectState = {
  projects: [
    {
      title: "Flag Finder WebApp",
      type: "Website",
      image: flagwebImage,
      link: "http://flagfinderapp.com/",
      option: "Go to website",
      description:
      "It’s a Flag characteristics Search Engine which was developed with React.js and backended with Wordpress. The data store is managed with Redux. All design was coded with CSS(SASS) and using modern JS to make it dynamic. The headless data is shared with Flag Finder Mobile App.",
      skills: ["React.js", "Redux", "Axios", "Router", "Thunk", "WordPress", "JavaScript(ES6)", "CSS3", "SASS", "EmailJS", "Bootstrap", "Node.js", "NPM"],
      gitHub: "https://github.com/felipe-mapa/flag-finder-web"
    },
    {
      title: "MetOcean App",
      type: "Website",
      image: metOceanImage,
      link: "http://felipepavanela78601.ipage.com/metocean/",
      option: "See Demo",
      description:
      "It’s an Interactive metocean application to help marine professionals to make decisions based on the weather. To display the data with charts it was used Victory data visualization. The backend was originally developed with PHP and MySQL and later converted to a Laravel project. The data is managed with Redux. The design was handled mainly using MaterialUI.",
      skills: ["Laravel", "PHP", "React.js","Redux", "Axios", "Thunk", "TypeScript", "JavaScript(ES6)", "CSS3", "MaterialUI", "Victory", "Node.js", "NPM"],
      gitHub: "https://github.com/felipe-mapa/met-ocean-app-with-laravel"
    },
    {
      title: "User List App",
      type: "Website",
      image: userlistImage,
      link: "http://felipepavanela78601.ipage.com/users_list_application/",
      option: "See Demo",
      description:
      "A simple User Management System which there is two types of Users, Admin User who can list, update, and delete any user and Normal User who can sign up and see the list of users. The Backend was handled with PHP and the data is stored with MySql and managed with Redux. The design was handled mainly using MaterialUI.",
      skills: ["React.js","Redux", "Axios", "Router", "Thunk", "TypeScript", "JavaScript(ES6)", "CSS3", "MaterialUI", "Node.js", "NPM", "PHP", "MySQL"],
      gitHub: "https://github.com/felipe-mapa/users_list_application"
    },
    {
      title: "Cuppee",
      type: "Website",
      image: cuppeeImage,
      link: "https://www.cuppee-nz.com/",
      option: "Go to website",
      description:
        "It’s an e-commerce website that promotes and sell a collapsible coffee cup. It was mainly coded in PHP using MySQL for database, and CSS(SASS) and JavaScript for frontend. Payments were handled with Stripe API.",
      skills: ["PHP", "MySQL", "JavaScript(ES6)", "CSS3", "SASS", "jQuery", "Ajax", "Stripe"],
      gitHub: "https://github.com/felipe-mapa/cuppee-nz"
    },
    {
      title: "The Wandering Linquist",
      type: "Website",
      image: twlImage,
      link: "http://thewanderinglinguist.com/",
      option: "Go to website",
      description:
        "It was an existing Wordpress travel and language learning blog website where I added a welcome pop-up and improved the subscription form at the top. I also do general maintenance and help with coding problems.",
      skills: ["PHP", "HTML5", "CSS3", "JavaScript(ES6)", "WordPress"],
      gitHub: null
    },
    {
      title: "Mount Everest NZ",
      type: "Website",
      image: mountImage,
      link: "https://mount-everest-nz.myshopify.com/",
      option: "Go to website",
      description:
        "It was an existing Shopify website where I redesigned and added new features through theme and code (Liquid).",
      skills: ["Shopify", "HTML5", "CSS3", "JavaScript(ES6)"],
      gitHub: null
    },
    {
      title: "Team to Clean",
      type: "Website",
      image: teamImage,
      link: "http://felipepavanela78601.ipage.com/teamtoclean/",
      option: "Go to website",
      description:
        "It’s a simple single page website written only in HTML, CSS(SASS), JavaScript and PHP. JQuery was used to manipulate the HTML and to have the use of Ajax for the contact form to link JavaScript to PHP.",
      skills: ["HTML5", "CSS3", "SASS", "JavaScript(ES6)", "jQuery", "Ajax", "PHP", "NPM"],
      gitHub: null
    },
    {
      title: "Flag Finder App",
      type: "Mobile",
      image: flagfinderappImage,
      link:
        "https://play.google.com/store/apps/details?id=com.pavanela.flag_finder",
      option: "Google Play",
      description:
        "It’s mainly a flag characteristics search engine developed with React Native for android. A flag quiz game was implemented on version 2.0. The headless data is retrieved from the same database as Flag Finder website using Redux for management.",
      skills: ["React.js", "React Native", "Redux", "Axios", "Router", "Thunk", "SQLite", "WordPress", "JavaScript(ES6)", "CSS3", "SASS", "Google Maps", "Node.js", "NPM"],
      gitHub: "https://github.com/felipe-mapa/flag-finder-mob"
    },
    {
      title: "VR Museum",
      type: "Mobile",
      image: vrmuseumImage,
      link: "https://1drv.ms/u/s!Avhn0KmceqP_k4Qb6bJE-LjVwivd0w?e=rd7l7a",
      option: "See Project",
      description:
        "It’s a Virtual Reality group project where we created what will be the next generation museum. We used Unity (C#) to code and develop the app, and Maya to model the scene and the objects. On the document attached (See Project), you can find the app (apk), the project proposal, a video of it working and the gitlab link for the project.",
      skills: ["Unity", "C#"],
      gitHub: "https://github.com/felipe-mapa/VR-museum"
    },
    {
      title: "Flag AR",
      type: "Mobile",
      image: flagfinderARImage,
      link: "https://1drv.ms/u/s!Avhn0KmceqP_k4Qm0ACyPD2WpnH9yQ?e=S1A1R6",
      option: "See Project",
      description:
        "It’s an android AR app developed with Unity (C#) and EasyAR for a university project. In this app, user places the phone camera in front of a flag to find out which country it is from. It is under development, so only few countries are set up. Attached (on See Project), you can see the whole documentation about the project and a study case using the application, you can also download the APK or see the video of it working. Next step is to integrate Flag Finder app once it is completed.",
      skills: ["Unity", "C#"],
      gitHub: "https://github.com/felipe-mapa/Flag-Reader"
    },
    {
      title: "S. to Christmas",
      type: "Mobile",
      image: survivingImage,
      link:
        "https://play.google.com/store/apps/details?id=felipe.pavanela.project.ames.ac.nz.survivingtochristmas",
      option: "Google Play",
      description:
        "It’s a game project developed for AMES College with Android Studio.",
      skills: ["Android Studio", "Java"],
      gitHub: null
    },
    {
      title: "Interactive AR",
      type: "Mobile",
      image: arAppImage,
      link: "https://1drv.ms/u/s!Avhn0KmceqP_k4QMurOASIV1X8xzaQ?e=K6zURs",
      option: "See Project",
      description:
        "It’s an android Augmented Reality application developed with Unity (C#) and using Vuforia. It uses an image to trigger some 3D models modelled and animated with Maya. After model are placed on the virtual world, the object can be clicked and it will show an effect created with Unity Particle System.",
      skills: ["Unity", "C#"],
      gitHub:"https://github.com/felipe-mapa/Interactive-AR"
    },
  ],
};
