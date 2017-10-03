import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class Start extends Component {
  state = {
    showModal: true
  }

  closeModal =  () => {
    this.props.handleStart();
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header>
          <div className='closebutton' onClick={this.closeModal}>&times;</div>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h2><b>Fizz Buzz!</b></h2>
          <h4>30 random numbers between 1 and 1000 will be selected.</h4>
          <h5>If the number is evenly divisble by 3 click "fizz", if 5 click "buzz", or if it's both click "fizz buzz"! How fast can you fizz buzz?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='success' onClick={this.closeModal} block>Start</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
