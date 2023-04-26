import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
      return(
        <div className="container">
          
          <Header />
            <div className="profile">
              <Profile />
            </div>
        
        </div>
      );
  }
}

export default App;
