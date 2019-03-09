import React from 'react'
import './Cards.css'
import $ from 'jquery';
// const waitingForSwap = false;

// function getCard() {
//   document.addEventListener('click',function(event) {
//     console.log("hii: " + event.target.id);
//   }, false);
// }

class Cards extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 0,
      isLineup: false,
      waitingForSwap: false,
      placement:["collection","lineup"]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSwap = this.handleSwap.bind(this);
    this.handleHold = this.handleHold.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleSwap(lineupID,swaps,waitingForSwap) {
    // alert(waitingForSwap + "  yoooo");
    function getCard(event) {
      var currID = event.target.id;
      if(currID <= 11 && waitingForSwap === true) {
        alert("Player already in starting lineup");
        if(currID == null){
          document.getElementById(currID).style.border = '0';
          document.getElementById(currID).style.height = '75%';
          document.getElementById(currID).style.width = '20%';
        }

        document.getElementById(lineupID).style.border = '0';
        document.getElementById(lineupID).style.height = '75%';
        document.getElementById(lineupID).style.width = '20%';

        document.getElementById('swapModeActived').id = 'swapMode';

        // this.handleSwap(lineupID,swaps,this.state.waitingForSwap);
      } else if(waitingForSwap === true){
          document.getElementById(currID).style.border = '4px solid blue';
          document.getElementById(currID).style.height = '77%';
          document.getElementById(currID).style.width = '22%';
      }
      // console.log(currID);

      document.getElementById('awaitingSwap').id = "here";
      swaps.push(lineupID);
      swaps.push(currID);
      console.log("SWAPS: " + swaps);
      document.removeEventListener('mousedown',getCard, waitingForSwap);
    }
    document.addEventListener('mousedown', getCard, waitingForSwap);

  }

  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }
  handleButtonPress() {
    this.buttonPressTimer = setTimeout(()=> this.handleHold(),2000);
  }

  handleClick() {
    // console.log(!this.state.waitingForSwap);
    if(document.getElementById('awaitingSwap') || document.getElementById('swapModeActived')){
      this.setState({waitingForSwap:true});
    }else if (!this.state.waitingForSwap) {
      alert("Opening AR");
    }else if(!this.state.isLineup){
      // alert("keef-->" + this.state.waitingForSwap);
      this.setState({waitingForSwap:true});
    }
  }

  handleHold() {
    const swaps = [];
    if (this.props.id <= 11) {
      this.setState({isLineup:true});
      this.setState({waitingForSwap:true});
      if(document.getElementById('swapModeActived')){
        return;
      }
      if(document.getElementById('swapMode')){
        document.getElementById('swapMode').id = "swapModeActived";
      }
      if(document.getElementById('here')){
        document.getElementById('here').id = "awaitingSwap";
        // document.getElementById('swapMode').id = 'swapModeActived';
        this.handleSwap(this.props.id,swaps,this.state.waitingForSwap);
        // alert("proper choice. choose next card");

        document.getElementById(this.props.id).style.border = '4px solid red';
        document.getElementById(this.props.id).style.height = '77%';
        document.getElementById(this.props.id).style.width = '22%';
      }
    }
  }

  render() {


    return (
        <img className="cardStyle" id={this.props.id} onMouseLeave={this.handleButtonRelease} onMouseUp={this.handleButtonRelease} onMouseDown={this.handleButtonPress} onClick={this.handleClick} src={this.props.data.card_image} alt="player" />

  );
  }
}


export default Cards
