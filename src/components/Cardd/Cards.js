import React from 'react'
import './Cards.css'

class Cards extends React.Component {
  render() {
    return (
      <img className="cardStyle" src={this.props.data.card_image} alt="player" />
    )
  }
}

export default Cards
