import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';

import Navbar from './navbar';
import Start from './start';
import End from './end';
import '../App.css';

export default class App extends Component {
  state = {
    num: 0,
    answer: '',
    total: 30,
    correct: 0,
    missed: 0,
    startTime: 0,
    endTime: 0,
  };

  reset = () => {
    this.setState({
      num: 0,
      answer: '',
      total: 30,
      correct: 0,
      missed: 0,
      startTime: 0,
      endTime: 0,
    });
    this.getRandNum();
  };

  componentDidMount() {
    this.getRandNum();
  }

  handleStart = () => {
    let d = new Date();
    this.setState({ startTime: Math.floor(d.getTime() / 1000) });
  };

  handleClick = e => {
    const userChoice = e.target.id;
    let { total, correct, missed, answer } = this.state;
    total--;
    if (total === 0) {
      let d = new Date();
      this.setState({ endTime: Math.floor(d.getTime() / 1000) });
    }
    userChoice === answer ? correct++ : missed++;
    this.setState({ total, correct, missed });
    this.getRandNum();
  };

  getRandNum = () => {
    let num;
    let answer;

    while (!answer) {
      num = Math.floor(Math.random() * 1000 + 1);

      if (num % 5 === 0 && num % 3 === 0) {
        answer = 'fizzbuzz';
      } else if (num % 3 === 0) {
        answer = 'fizz';
      } else if (num % 5 === 0) {
        answer = 'buzz';
      }
    }

    this.setState({
      num,
      answer,
    });
  };

  render() {
    const { num, correct, missed, total, startTime, endTime } = this.state;
    return (
      <div className="App">
        <Navbar brand="Fizz Buzz" />
        <Start handleStart={this.handleStart} />
        {total === 0 && (
          <End
            correct={correct}
            missed={missed}
            reset={this.reset}
            start={startTime}
            end={endTime}
            handleStart={this.handleStart}
          />
        )}

        <Row>
          <Col sm={3} className="rules">
            <p>Rules Reminder!</p>
            <p>3: fizz</p>
            <p>5: buzz</p>
            <p>Both: fizz buzz</p>
          </Col>
          <Col sm={9} xs={12} className="game">
            <Row>
              <Col xs={6}>Correct: {correct}</Col>
              <Col xs={6}>Missed: {missed}</Col>
            </Row>
            <h1>{num}</h1>
            <ButtonToolbar>
              <Button
                bsStyle="primary"
                bsSize="large"
                id="fizz"
                onClick={this.handleClick}
              >
                fizz
              </Button>
              <Button
                bsStyle="warning"
                bsSize="large"
                id="buzz"
                onClick={this.handleClick}
              >
                buzz
              </Button>
              <Button
                bsStyle="success"
                bsSize="large"
                id="fizzbuzz"
                onClick={this.handleClick}
              >
                fizz buzz
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </div>
    );
  }
}
