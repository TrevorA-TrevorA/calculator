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
    this.calculated = false
    this.clear = this.clear.bind(this);
    this.bindKeys = this.bindKeys.bind(this);
    this.operations = [
      this.add.bind(this),
      this.subtract.bind(this),
      this.multiply.bind(this),
      this.divide.bind(this)
    ]
    this.indexKey = { add: 0, subtract: 1, multiply: 2, divide: 3}
  }

  add(acc, num) {
    return acc + num;
  }

  subtract(acc, num) {
    return acc - num;
  }

  multiply(acc, num) {
    return acc * num;
  }

  divide(acc, num) {
    return acc / num;
  }

  setOperation(e) {
    this.calculated = false;
    const acc = this.state.accumulator || parseFloat(this.state.number);
    this.setState({ operation: e.target.id, display: '', accumulator: acc });
  }

  calculate() {
    if (this.state.operation === null) return;
    const acc = this.state.accumulator;
    const num = parseFloat(this.state.number);
    const opIdx = this.indexKey[this.state.operation]
    const operation = this.operations[opIdx];
    const newAcc = operation(acc, num)
    this.calculated = true;
    this.setState({ accumulator: newAcc, display: `${newAcc}` })
  }

  clear() {
    this.setState({number: '', accumulator: 0, display: ''});
  }

  bindKeys(e) {
    e.preventDefault();

    const buttons = Array.from(document.getElementsByClassName('button'))

    if (['=','-','+','/'].includes(e.key)) {
      const button = buttons.find(button => button.innerHTML === e.key);
      button.click();
    }
   
    switch(e.key) {
      case '*':
        document.getElementById('multiply').click();
        break;
      case 'Enter':
        document.getElementById('equals').click();
        break;
      case 'Backspace':
        document.getElementById('clear').click();
        break;
      case '.':
        if (this.state.display.includes('.')) return;
        const newVal = this.calculated || !this.state.display ? '0.' : `${this.state.display}.`
        const acc = this.calculated ? 0 : this.state.accumulator;
        this.setState({ number: newVal, display: newVal, accumulator: acc });
        this.calculated = false;
        return;
    }

    for (let n = 0; n < 10; n++) {
      if (`${n}` === e.key) {
        const newVal = this.calculated ? `${n}` : `${this.state.display}${n}`
        const acc = this.calculated ? 0 : this.state.accumulator;
        this.setState({ number: newVal, display: newVal, accumulator: acc });
        this.calculated = false;
        return;
      }
    }
  }


  render() {
    const { number, accumulator } = this.state;

    return (
      <div className="calculator" tabIndex="0" onKeyDown={this.bindKeys}>
        <div className="number_field">
          <input id="number-field" type="text" readOnly value={this.state.display}/>
        </div>
          <br/>
        <div className="buttons" >
          <button id="add" className="button" onClick={this.setOperation}>+</button>
          <button id="subtract" className="button" onClick={this.setOperation}>-</button>
          <button id="multiply" className="button" onClick={this.setOperation}>x</button>
          <button id="divide" className="button" onClick={this.setOperation}>/</button>
          <button id="clear" className="button" onClick={this.clear}>CLR</button>
          <button id="equals" className="button" onClick={this.calculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;