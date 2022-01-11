import './App.css';
import React, { useState } from 'react';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Email from './components/Email/Email';

function App() {

  const [loader, setLoader] = useState(false)

  return (
    <div className="App">
      {loader ? (
        <Loader>Loading</Loader>
      ):(
        <React.Fragment>
          <NavBar></NavBar>
          <About></About>
          <SocialMedia></SocialMedia>
          <Email></Email>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
