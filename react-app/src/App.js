import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventories" element={<InventoryList />} />
          <Route path="/inventory/:id" element={<InventoryEdit />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
