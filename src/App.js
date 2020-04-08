import React, {useState} from 'react';
import './App.css';

import Header from './sections/Header/Header'
import About from './sections/About/About'
import Navigation from './sections/Navigation/Navigation'
import Footer from './sections/Footer/Footer'
import Categories from './sections/Categories/Categories'
import Projects from './sections/Projects/Projects'

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
