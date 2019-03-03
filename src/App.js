import React, { Component } from 'react';
import './App.css';
import ReviewsList from "./ReviewList/ReviewsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          User Reviews
        </header>

        <ReviewsList />
      </div>
    );
  }
}

export default App;
