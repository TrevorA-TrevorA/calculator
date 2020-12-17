import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      display: ''
    }

    this.operationSet = false;
    this.setOperation = this.setOperation.bind(this);
    this.calculate = this.calculate.bind(this);
    this.calculated = false
    this.clear = this.clear.bind(this);
    this.bindKeys = this.bindKeys.bind(this);
  }

  componentDidMount() {
    document.querySelector('.container').focus();
  }

  setOperation(e) {
    const [display, operator] = [this.state.display, e.target.innerHTML]
    if (/((\W|x)\s(\W|x))$/.test(display)) return;
    if (/(\W|x)$/.test(display) && operator !== '-') return;
    if (!display && operator !== '-') return;

    let newVal;
    if (!display && operator === '-') {
      newVal = '-';
    } else if (/(\d\s(\W|x){1})$/.test(display) && operator === '-') {
      newVal = `${display} -`
    } else {
      newVal = `${display} ${operator}`;
      this.operationSet = true;
    }
      
    this.setState({ display: newVal });
    this.calculated = false;
  }

  calculate() {
    if (!this.operationSet) return;
    if (/(\W|x)$/.test(this.state.display)) return;
    let result = eval(`${this.state.display}`.replace(/x/,'*'))
    result = /\d$/.test(result) ? result : result.substring(0, result.length - 2);
    this.calculated = true;
    this.setState({ display: `${result}` })
  }

  clear() {
    this.setState({display: '' });
  }

  newDisplayVal(num) {
    let newVal;
    if (this.calculated) {
      newVal = `${num}`;
    } else if (this.state.display === '-') {
      newVal = `-${num}`;
    } else if (/(\W|x)\s\-$/.test(this.state.display)) {
      newVal = `${this.state.display}${num}`;
    } else if (/(\W|x)$/.test(this.state.display)) {
      newVal = `${this.state.display} ${num}`;
    } else {
      newVal = `${this.state.display}${num}`;
    }
    return newVal
  }

  numericInput(e) {
    for (let n = 0; n < 10; n++) {
      if (`${n}` === e.key) {
        const newVal = this.newDisplayVal(n)
        this.setState({ display: newVal });
        this.calculated = false;
      }
    }
  }

  bindKeys(e) {
    if (e.key === '0' && this.state.display === '') return;

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
        this.setState({ display: newVal });
        this.calculated = false;
        return;
    }

    this.numericInput(e)
  }


  render() {
    return (
      <div className="container" tabIndex="0" onKeyDown={this.bindKeys}>
        <h1>AN ACTUAL CALCULATOR</h1>
        <div className="calculator">
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
      </div>
    );
  }
}

export default Calculator;