import './App.css';
import React, { useState } from 'react';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Email from './components/Email/Email';
import About from './components/About/About';

function App() {

  const [loader, setLoader] = useState(false)

  return (
    <div className="App">
      {loader ? (
        <Loader>Loading</Loader>
      ):(
        <React.Fragment>
          <NavBar></NavBar>
          <Introduction></Introduction>
          <SocialMedia></SocialMedia>
          <Email></Email>
          <About></About>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
