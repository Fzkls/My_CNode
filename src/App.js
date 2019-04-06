import React, { Component } from 'react';
import './view/index.css';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';
import RouterIndex from './router/router'
class App extends Component {
  render() {
    return (
      <div className='pageWrap'>
        <MainHeader/>
        <MainFooter/>
      </div>
    );
  }
}

export default App;
