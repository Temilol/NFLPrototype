import React from 'react';
import {Container } from 'react-bootstrap';
import NavigationBar from '../../components/Nav/NavigationBar'
import StarterPack from '../../components/Starter/StarterPack'

class Home extends React.Component {

    render() {
      return (
        <div>
          <NavigationBar />
          <Container>
            <StarterPack className="buttonStyle" />
          </Container>
        </div>
    )}
};




export default Home;
