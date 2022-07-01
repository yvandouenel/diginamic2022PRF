
import './../css/App.css';
import { Component } from 'react';
import IncrementButton from './buttons/IncrementButton';
import CounterButton from './buttons/CounterButton';
import ResetButton from './buttons/ResetButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    
  }
  handleClickIncrement = () => {
    console.log(`dans handleClickIncrement`);
    console.log(`this`, this);
    // Appel de setState
    this.setState(function(state,props) {
      return {counter: state.counter + 1}
    })
  }
  handleClickReset = () => {
    console.log(`dans handleClickReset`);
    
    // Appel de setState
    this.setState({counter: 0})
  }
  render() {
    return (
      <>
        <CounterButton  counter={this.state.counter} />
        <CounterButton  counter={this.state.counter} />
        <IncrementButton handleClickIncrement={this.handleClickIncrement} />
        <ResetButton handleClickReset={this.handleClickReset}/>
      </>
    );
  }
}

export default App;
