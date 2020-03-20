import React, {useState} from 'react';
import './App.css';

import Header from './partials/header/Header'
import About from './partials/about/About'
import Navigation from './partials/navigation/Navigation'
import Footer from './partials/footer/Footer'
import Categories from './partials/categories/Categories'
import Projects from './partials/projects/Projects'

function App() {
  const [selected, setSelected] = useState("Website")
  
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Categories changeCat={c => setSelected(c)} selected={selected} />
      <Projects selected={selected} />
      <Footer />
    </div>
  );
}

export default App;
