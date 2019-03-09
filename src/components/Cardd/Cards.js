import React from 'react'
import './Cards.css'

class Cards extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 0,
      placement:["collection","lineup"]
    }
  }

  render() {
    return (
      <img className="cardStyle" id={this.state.num} src={this.props.data.card_image} alt="player" />
    )
  }
}

export default Cards
