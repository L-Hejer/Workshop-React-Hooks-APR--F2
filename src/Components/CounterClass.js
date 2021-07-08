import React, { Component } from 'react';

class CounterClass extends Component {
  constructor() {
    console.log('constructor()');
    super();
    this.state = {
      count: 0,
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 3000),
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.state.count && this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log('render()');
    return (
      <div>
        <h1>Counter</h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span> {this.state.count} </span>
        <button className="increment-btn" onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default CounterClass;
