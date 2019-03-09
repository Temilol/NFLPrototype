import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import './StarterPack.css'

class StarterPack extends React.Component{

  constructor(props, context) {
    super(props, context)
    this.handleShow = this.handleShow.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.state = {
      show: false
    }
  }

  handleShow(){
    this.setState({show: true})
  }

  handleExit(){
    this.setState({show: false})
  }




  render() {
    return (
      <>
        <Button variant="secondary" size="lg" onClick={this.handleShow}> Get Cards </Button>


        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.show} onHide={this.handleExit}>
           <Modal.Header closeButton>
             <Modal.Title className="nameStyle">Starter Pack</Modal.Title>
           </Modal.Header>
           <Modal.Body>
              <img className="imageStyle" src={"./playerCards/lynch_marshawn.png"} alt="Starter Icon" />
           </Modal.Body>
           <Modal.Footer  className="buttonStyle">
             <Button size="lg" variant="secondary" href={"/cards"}>
               Open
             </Button>
           </Modal.Footer>
         </Modal>
       </>
    )
  }
}

export default StarterPack;
