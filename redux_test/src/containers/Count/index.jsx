import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

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
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.count},下方组件总人数：{this.props.ren.length}</h4>
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
  (state) => ({ count: state.he,ren:state.ren }),

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
