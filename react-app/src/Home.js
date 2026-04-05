import React, { Component } from 'react';
import './App.css';
import AppNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="success" tag={Link} to="/inventories">
            Manage Inventory List
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
