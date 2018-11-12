import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footerComponent';
import Header from './Components/headerComponent';
class App extends Component {
  render() {
    return (
       <React.Fragment>

       <Header/>
      <Footer/>

      <div className="App">

      </div>
        </React.Fragment>
    );
  }
}

export default App;
