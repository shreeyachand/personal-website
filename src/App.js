import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';

class App extends React.Component {
  render() {
    return (
      <>
      <HomePage mode="dark" />
      </>
    );
  }
}

export default App;