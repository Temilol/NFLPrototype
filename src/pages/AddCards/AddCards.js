import React from 'react';
import {Container, Col} from 'react-bootstrap';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'

const playerComponent = playersData.map(playerData => <Col sm={4} > <Cards key={playerData} data={playerData} /> <br/> </Col>)

class AddCards extends React.Component {
  constructor(props){
    super(props);
    this.sectionTitle = props.sectionTitle;
  }

    render(props) {
      return (
        <Container>
          <div>
            <h2>Starting Lineup</h2>
            {playerComponent}
          </div>
        </Container>
    )}
};




export default AddCards;
