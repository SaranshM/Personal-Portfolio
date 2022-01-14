import './App.css';
import React, { useState } from 'react';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Email from './components/Email/Email';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import OtherProjects from './components/OtherProjects/OtherProjects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  const [loader, setLoader] = useState(false)
  const [hamburger, setHamburger] = useState(false)

  return (
    <div className="App">
      {loader? (
        <Loader>Loading</Loader>
      ):(
        <React.Fragment>
          <NavBar></NavBar>
          <Introduction></Introduction>
          <SocialMedia></SocialMedia>
          <Email></Email>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <OtherProjects></OtherProjects>
          <Contact></Contact>
          <Footer></Footer>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
