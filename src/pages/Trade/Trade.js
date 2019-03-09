import React from 'react';
import {Container} from 'react-bootstrap';
import NavigationBar from '../../components/Nav/NavigationBar';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'






const personalComponent = playersData.map(playerData => <Cards key={playerData.id} data={playerData} />)

class Trade extends React.Component {

    render() {
      return (
        <div>
          <NavigationBar />
          <Container>
            <hr/>
              <h3>My Cards</h3>
              {personalComponent}
              <p></p>
            <hr/>


            <hr/>
            <h3>The Market</h3>
              <img src={Cards}/>
            <hr/>


          </Container>
        </div>
    )}
};




export default Trade;
