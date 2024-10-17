// import favicon from './Asset 9@4x.png';
import './App.css';
import React from 'react';
// import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import { AlertProvider } from "./alertContext";
import Alert from "./Alert";
import { Helmet } from 'react-helmet';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <AlertProvider>
      <Helmet>
        <title>Little Lemon</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Helmet>
      <div className="frame">
        <div className="overlap-wrapper">
          <div className="overlap">
            {/* <Header/> */}
            <Nav/>
            <Main/>
            <Footer/>
            <Alert />
          </div>
        </div>
      </div>
    </AlertProvider>
    
  );
}

export default App;
