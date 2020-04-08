# FELIPE PAVANELA PORTFOLIO

A simple portfolio developed with react to show some of my work.

## URL

https://www.pavanela.com/

### Animations
- The main animation was done with Layer Mask Animation in Photoshop.

To be able to use svg on the project I had to install react-svg.


- All other animation was coded with CSS.
- "Categories" and "Projects" scrolling were handled with react-scroll

## Dev Notes
To be able to use sass on the project I had to install node-sass and npm-run-all as devDependencies and modify some scripts:
  
    "build-css": "node-sass --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "start-js": "react-scripts start"


## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

