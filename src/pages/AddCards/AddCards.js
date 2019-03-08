import React from 'react';
import {Container, Col} from 'react-bootstrap';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'
import './AddCards.css'

const playerComponent = playersData.map(playerData => <Cards key={playerData} data={playerData} />)
const personalComponent = playersData.map(playerData => <Cards key={playerData} data={playerData} />)

class AddCards extends React.Component {
  constructor(props){
    super(props);
    this.sectionTitle = props.sectionTitle;
  }

    render(props) {
      return (
        <Container>
          <h2>Starting Lineup</h2>
          <hr/>
          {playerComponent}
          <hr/>
          <h2>My Cards</h2>
          <hr/>
          <div className="scrolling-wrapper">
            <div className="cardStyles">
              {personalComponent}
            </div>
          </div>

        </Container>
    )}
};




export default AddCards;
