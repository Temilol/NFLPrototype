import React from 'react';
import {Container } from 'react-bootstrap';
import NavigationBar from '../../components/Nav/NavigationBar'
// import NavWithTabs from '../../components/tabs/tab'
import StarterPack from '../../components/Starter/StarterPack'

class Home extends React.Component {

    render() {
      return (
        <div>
          {/*<NavigationBar />*/}
          <Container>
            <hr/>
              <h2>Starting Lineup</h2>
            <hr/>
              <p>No cards Available</p>
            <hr/>
              <h2>My Cards</h2>
            <hr/>
              <p>No cards Available</p>
            <StarterPack className="buttonStyle" />
          </Container>
        </div>
    )}
};




export default Home;
