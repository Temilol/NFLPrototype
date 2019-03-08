import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './NavigationBar.css'

class NavigationBar extends React.Component {
  render() {
    return(
      <Navbar bg="light" expand="lg" className="NavbarEx">
        <Navbar.Brand href="/">ProductName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">Bets</Nav.Link>
            <Nav.Link href="">CodeScan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
