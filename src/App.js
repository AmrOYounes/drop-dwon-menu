import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/navbar';
import TourList from './components/tourList/tourList'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import tourLists from './components/tourList/tourList';
import Dropdown from './components/dropdown/dropdown';

function App() {
  return (
    <div>
      <Navbar>
      </Navbar>
    </div>
  );
}

export default App;
