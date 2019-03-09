import React from 'react';
import {Container} from 'react-bootstrap';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'
import './AddCards.css'
import NavigationBar from '../../components/Nav/NavigationBar'



const playerComponent = playersData.slice(0,10).map(playerData => <Cards key={playerData.id} data={playerData} />)
const personalComponent = playersData.map(playerData => <Cards key={playerData.id} data={playerData} />)
// const personalComponent = []
class AddCards extends React.Component {
  constructor(props){
    super(props);
    this.sectionTitle = props.sectionTitle;
  }

    render() {
      return (
        <div>
        <NavigationBar />
        <Container>
          <hr/>
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
      </div>
    )}
};




export default AddCards;
