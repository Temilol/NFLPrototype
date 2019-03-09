import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import './NavigationBar.css'

const navbar={
  backgroundColor: '#013369'
}
const navlinks={
  color: 'white'
}
class NavigationBar extends React.Component {
  render() {
    const camera = <input type="file" accept="image/*" capture="camera"/>

    const openCamera = () => {
      console.log("Working");
      camera.click();
    }

    return(
      <Navbar style={navbar} expand="lg" className="NavbarEx">
        <Navbar.Brand style={navlinks} href="/">Trade 360</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={navlinks} href="/">Home</Nav.Link>
            <Nav.Link style={navlinks} href="/trade">Trade</Nav.Link>
            <input type="file" accept="image/*" capture="camera"/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
