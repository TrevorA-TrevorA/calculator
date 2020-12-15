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
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  add(e) {
    e.preventDefault()
    const nums = [this.state.num1, this.state.num2].map(n => parseFloat(n));
    const [num1, num2] = nums;
    const result = num1 + num2;
    this.setState({ result: result })
  }

  subtract(e) {
    e.preventDefault()
    const nums = [this.state.num1, this.state.num2].map(n => parseFloat(n));
    const [num1, num2] = nums;
    if (isNaN(num1) || isNaN(num2)) return;
    const result = num1 - num2;
    this.setState({ result: result })
  }

  multiply(e) {
    e.preventDefault()
    const nums = [this.state.num1, this.state.num2].map(n => parseFloat(n));
    const [num1, num2] = nums;
    if (isNaN(num1) || isNaN(num1)) return;
    const result = num1 * num2;
    this.setState({ result: result })
  }

  divide(e) {
    e.preventDefault()
    const nums = [this.state.num1, this.state.num2].map(n => parseFloat(n));
    const [num1, num2] = nums;
    if (isNaN(num1) || isNaN(num1)) return;
    const result = num1 / num2;
    this.setState({ result: result })
  }

  clear(e) {
    e.preventDefault;
    this.setState({result: 0, num1: '', num2: ''});
  }

  setNum1(e) {
    e.preventDefault()
    let newVal;
    const input = document.querySelector("#num1").value;

    if (input === undefined) {
      newVal = '';
    } else if (isNaN(input)) {
      return;
    } else {
      newVal = input;
    }
    

    this.setState({ num1: newVal });
  }

  setNum2(e) {
    e.preventDefault()
    let newVal;
    const input = document.querySelector("#num2").value

    if (input === undefined) {
      newVal = '';
    } else if (isNaN(input)) {
      return;
    } else {
      newVal = input;
    }

    this.setState({ num2: newVal });
  }

  render() {
    const { result, num1, num2 } = this.state;
    return (
      <div>
        <input id="num1" type="text" value={num1} onChange={this.setNum1}/>
        <input id="num2" type="text" value={num2} onChange={this.setNum2}/>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>CLR</button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;