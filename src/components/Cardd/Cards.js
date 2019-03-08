import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Cards.css'

// <Card style={{ width: '13rem' }}>
//   <Card.Body>
//     <Card.Img variant="top" src={this.props.data.card_image}  />
//   </Card.Body>
// </Card>

class Cards extends React.Component {
  render() {
    return (
      <div>
        <img className="cardStyle" src={this.props.data.card_image} />
      </div>
    )
  }
}

export default Cards
