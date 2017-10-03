import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class End extends Component {
  state = {
    showModal: true,
  }

  closeModal =  () => {
    this.props.reset();
    this.props.handleStart();
    this.setState({ showModal: false })
  }

  render() {
    const {correct, missed} = this.props;
    const max = correct+missed;
    const percent = (correct / max * 100).toFixed(2);
    const seconds = this.props.end - this.props.start;
    return (
      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header>
          <div className='closebutton' onClick={this.closeModal}>&times;</div>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h3>You scored a {percent}%</h3>
          <p>{percent > 80 ? 'Good job!' : 'You could do better :/'}</p>
          <p>You fizz buzzed in {seconds} seconds.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle='primary' onClick={this.closeModal} block>Play Again</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
