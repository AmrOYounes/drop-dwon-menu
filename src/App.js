import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/navbar';
import TourList from './components/tourList/tourList'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />

    </React.Fragment>


  );
}

export default App;
