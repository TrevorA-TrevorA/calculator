import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      result: 0,
      num1: "",
      num2: ""
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide = this.divide.bind(this)
  }

  add(e) {
    e.preventDefault()
    const [num1, num2] = [this.state.num1, this.state.num2];
    if (isNaN(num1) || isNaN(num1)) return;
    const result = num1 + num2;
    this.setState({ result: result })
  }

  subtract(e) {
    e.preventDefault()
    const [num1, num2] = [this.state.num1, this.state.num2];
    if (isNaN(num1) || isNaN(num2)) return;
    const result = num1 - num2;
    this.setState({ result: result })
  }

  multiply(e) {
    e.preventDefault()
    const [num1, num2] = [this.state.num1, this.state.num2];
    if (isNaN(num1) || isNaN(num1)) return;
    const result = num1 * num2;
    this.setState({ result: result })
  }

  divide(e) {
    e.preventDefault()
    const [num1, num2] = [this.state.num1, this.state.num2];
    if (isNaN(num1) || isNaN(num1)) return;
    const result = num1 / num2;
    this.setState({ result: result })
  }

  setNum1(e) {
    e.preventDefault()
    const input = document.querySelector("#num1").value
    let newVal = (input === '' || isNaN(input)) ? '' : parseFloat(input);

    this.setState({ num1: newVal });
  }

  setNum2(e) {
    e.preventDefault()
    const input = document.querySelector("#num2").value
    let newVal = (input === '' || isNaN(input)) ? '' : parseFloat(input);

    this.setState({ num2: newVal });
  }

  render() {
    return (
      <div>
        <input id="num1" type="text" value={this.state.num1} onChange={this.setNum1}/>
        <input id="num2" type="text" value={this.state.num2} onChange={this.setNum2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>/</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;