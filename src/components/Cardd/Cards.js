import React from 'react'
import {Card, Button} from 'react-bootstrap'

class Cards extends React.Component {
  render() {
    console.log(this.props.data.card_image);
    return (
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>{this.props.data.first_name} {this.props.data.last_name}</Card.Title>
          <Card.Img variant="top" src={this.props.data.card_image}  />
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Cards
