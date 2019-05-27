import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h4>Counter: {this.props.counter}</h4>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;