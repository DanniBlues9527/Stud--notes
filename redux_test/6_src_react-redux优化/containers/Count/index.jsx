import React, { Component } from "react";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
import { connect } from "react-redux";

class Count extends Component {
  state = { carName: "奔驰" };

  increment = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAction(value * 1)
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.createDecrementAction(value * 1)
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if(this.props.count % 2 !== 0){
      this.props.createIncrementAction(value * 1)
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAsyncAction(value * 1,500)
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state }),

  //   (dispatch) => ({
  //     incrementAction: (data) => dispatch(createIncrementAction(data)),
  //     decrementAction: (data) => dispatch(createDecrementAction(data)),
  //     incrementAsyncAction: (data, time) =>
  //       dispatch(createIncrementAsyncAction(data, time)),
  //   })

  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
  }
)(Count);
