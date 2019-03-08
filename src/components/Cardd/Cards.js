import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Cards.css'

class Cards extends React.Component {
  render() {
    return (
      <img className="cardStyle" src={this.props.data.card_image} />
    )
  }
}

export default Cards
