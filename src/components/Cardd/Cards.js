import React from 'react'
import './Cards.css'
import $ from 'jquery';
// const waitingForSwap = false;

function getCard() {
  document.addEventListener('click',function(event) {
    console.log("hii: " + event.target.id);
  }, false);
}

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
    alert(waitingForSwap + "  yoooo");
    function getCard(event) {
      var currID = event.target.id;
      if(currID <= 11 && waitingForSwap === true) {
        alert("Player already in starting lineup");
        document.getElementById(currID).style.border = '0';
        document.getElementById(currID).style.height = '75%';
        document.getElementById(currID).style.width = '20%';
        this.handleIncorrectSwap(lineupID,swaps,waitingForSwap);
      } else if(waitingForSwap === true){
          document.getElementById(currID).style.border = '4px solid blue';
          document.getElementById(currID).style.height = '77%';
          document.getElementById(currID).style.width = '22%';
          // document.getElementById('awaitingSwap').id = "here";
      }
      console.log(currID);
      swaps.push(lineupID);
      swaps.push(currID);
      console.log("SWAPS: " + swaps);
      document.removeEventListener('mousedown',getCard, waitingForSwap);
    }
    document.addEventListener('mousedown',getCard, waitingForSwap);

  }

  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }
  handleButtonPress() {
    this.buttonPressTimer = setTimeout(()=> this.handleHold(),2000);
  }

  handleClick() {
    if (this.state.waitingForSwap === false && !document.getElementById('awaitingSwap')) {
      alert("Opening AR");
    } else {
      alert("keef-->" + this.state.waitingForSwap);
        //this.setState({waitingForSwap:false});
    }
  }

  handleHold() {
    const swaps = [];
    if (this.props.id <= 11) {
      this.setState({isLineup:true});
      this.setState({waitingForSwap:true});
      document.getElementById('here').id = "awaitingSwap";
      this.handleSwap(this.props.id,swaps,this.state.waitingForSwap);
      // alert("proper choice. choose next card");

      document.getElementById(this.props.id).style.border = '4px solid red';
      document.getElementById(this.props.id).style.height = '77%';
      document.getElementById(this.props.id).style.width = '22%';
    }
  }

  render() {


    return (
        <img className="cardStyle" id={this.props.id} onMouseLeave={this.handleButtonRelease} onMouseUp={this.handleButtonRelease} onMouseDown={this.handleButtonPress} onClick={this.handleClick} src={this.props.data.card_image} alt="player" />

  );
  }
}


export default Cards
