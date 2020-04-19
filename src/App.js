import React from 'react';
import './App.css';

import Header from './sections/Header/Header'
import About from './sections/About/About'
import Navigation from './sections/Navigation/Navigation'
import Footer from './sections/Footer/Footer'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills';

function App() {
  
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
