import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import './NavigationBar.css'

class NavigationBar extends React.Component {
  render() {
    const camera = <input type="file" accept="image/*" capture="camera"/>

    const openCamera = () => {
      console.log("Working");
      camera.click();
    }

    return(
      <Navbar bg="light" expand="lg" className="NavbarEx">
        <Navbar.Brand href="/">ProductName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/trade">Trade</Nav.Link>
            <input type="file" accept="image/*" capture="camera"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
