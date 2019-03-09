import React from 'react';
import {Container} from 'react-bootstrap';
import NavigationBar from '../../components/Nav/NavigationBar';
import playersData from '../../assets/data/playerCards'
import Cards from '../../components/Cardd/Cards'


function shuffle(temp) {
  var currentIndex = temp.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = temp[currentIndex];
    temp[currentIndex] = temp[randomIndex];
    temp[randomIndex] = temporaryValue;
  }

  return temp;
}



const personalComponent = playersData.map(playerData => <Cards key={playerData.id} data={playerData} flag= {true} />)
const marketComponent = shuffle(playersData.map(playerData => <Cards key={playerData.id} data={playerData} flag= {true} />))

// var market = personalComponent;
 // market = shuffle(market);
// console.log(marketComponent);

class Trade extends React.Component {

    render() {
      return (
        <div>
          <NavigationBar />
          <Container>
            <hr/>
              <h3>My Cards</h3>
            <hr/>
              {personalComponent}
            <hr/>
              <h3>The Market</h3>
            <hr/>
            <div className="scrolling-wrapper">
              <div className="cardStyles">
                {marketComponent}
              </div>
            </div>
            <hr/>


          </Container>
        </div>
    )}
};




export default Trade;
