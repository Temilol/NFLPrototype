import React from 'react';
import {Container } from 'react-bootstrap';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'

const playerComponent = playersData.map(playerData => <Cards key={playerData} data={playerData} />)

class AddCards extends React.Component {

    render() {
      return (
        <Container>
          <div>
            <h1>AddCards</h1>
            {playerComponent}
          </div>
        </Container>
    )}
};




export default AddCards;
