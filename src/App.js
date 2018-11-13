import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footerComponent';
import Header from './Components/headerComponent';
import Stage from './Components/stageComponent';
class App extends Component {
  render() {
    return (
       <React.Fragment>

       <Header/>
       <Stage/>
      <Footer/>

      <div className="App">

      </div>
        </React.Fragment>
    );
  }
}

export default App;
