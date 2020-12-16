import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      number: '',
      accumulator: 0,
      display: '',
      operation: null
    }

    this.setOperation = this.setOperation.bind(this);
    this.calculate = this.calculate.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.clear = this.clear.bind(this);
  }

  add() {
    const acc = this.state.accumulator;
    const num = parseFloat(this.state.number);
    let newVal = acc + num;
    return newVal;
  }

  subtract() {
    const acc = this.state.accumulator;
    const num = parseFloat(this.state.number);
    let newVal = acc - num;
    return newVal;
  }

  multiply() {
    const acc = this.state.accumulator;
    const num = parseFloat(this.state.number);
    let newVal = acc * num;
    return newVal;
  }

  divide() {
    const acc = this.state.accumulator;
    const num = parseFloat(this.state.number);
    let newVal = acc / num;
    return newVal;
  }

  setOperation(e) {
    this.setState({ display: '' })
    const op = e.target.id

    switch(op) {
      case 'add':
        this.setState({ operation: this.add.bind(this) })
        break;
      case 'subtract':
        this.setState({ operation: this.subtract.bind(this) })
        break;
      case 'multiply':
        this.setState({ operation: this.multiply.bind(this) })
        break;
      case 'divide':
        this.setState({ operation: this.divide.bind(this) })
        break;
    }
  }

  calculate() {
    const newAcc = this.state.operation()
    this.setState({ accumulator: newAcc, display: newAcc })
  }

  clear() {
    this.setState({number: 0, accumulator: 0, display: ''});
  }

  setNumber(e) {
    e.preventDefault()
    const input = document.querySelector("#number-field").value;
    let newVal;

    if (input === undefined) {
      newVal = '';
    } else if (isNaN(input)) {
      return;
    } else {
      newVal = input;
    }

    let acc = this.state.accumulator || parseFloat(newVal)
    this.setState({ number: newVal, display: newVal, accumulator: acc })
  }


  render() {
    const { number, accumulator } = this.state;

    return (
      <div className="calculator">
        <div className="number_field">
          <input id="number-field" type="text" value={this.state.display} onChange={this.setNumber}/>
        </div>
          <br/>
        <div className="buttons" >
          <button id="add" className="button" onClick={this.setOperation}>+</button>
          <button id="subtract" className="button" onClick={this.setOperation}>-</button>
          <button id="multiply" className="button" onClick={this.setOperation}>x</button>
          <button id="divide" className="button" onClick={this.setOperation}>/</button>
          <button className="button" onClick={this.clear}>CLR</button>
          <button className="button" onClick={this.calculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;