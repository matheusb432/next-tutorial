import { Component } from 'react';

export default class Contador extends Component {
  constructor(props) {
    super(props);

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);

    this.state = {
      num: props.valorInicial ?? 0,
      passo: props.passo ?? 1,
    };
  }

  // * setting state outside of constructor
  // state = {
  //   num: this.props.valorInicial ?? 0,
  //   passo: this.props.passo ?? 1,
  // };

  // ? handling `this` to use onClick={this.inc}
  // constructor(props) {
  //   super(props);
  //   this.inc = this.inc.bind(this);
  //   this.dec = this.dec.bind(this);
  // }

  inc() {
    this.setState({
      num: this.state.num + this.state.passo,
    });
  }

  dec() {
    this.setState({
      num: this.state.num - this.state.passo,
    });
  }

  incAlt = () => {
    this.setState({
      num: this.state.num + this.state.passo,
    });
  };

  decAlt = () => {
    this.setState({
      num: this.state.num - this.state.passo,
    });
  };

  setPasso = (value) => {
    this.setState({
      passo: value,
    });
  };

  renderForm() {
    return (
      <>
        <input
          type="number"
          value={this.state.passo}
          min={1}
          max={10000}
          onChange={(e) => this.setPasso(+e.target.value)}
        />
        <hr />
        <button onClick={() => this.inc()}>++ #01</button>
        <button onClick={() => this.dec()}>-- #01</button>
        <hr />
        <button onClick={this.inc}>++ #02</button>
        <button onClick={this.dec}>-- #02</button>
        <hr />
        <button onClick={this.incAlt}>++ #03</button>
        <button onClick={this.decAlt}>-- #03</button>
      </>
    );
  }

  render() {
    return (
      <div>
        <h1>Contador (usando Classe)</h1>
        <h2>{this.props.valorInicial}</h2>
        <h2>{this.state.num}</h2>
        {this.renderForm()}
      </div>
    );
  }
}
