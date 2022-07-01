
import '../css/App.css';

import { Component } from 'react';
import Task from './Task';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { label: 'Aller boire une bière' },
        { label: 'Faire le ménage' },
      ]
    };
  }
  render() {
    return (
      <>
        {this.state.tasks.map((task, index) => <Task key={index} label={task.label} />)}
      </>
    );
  }
}

export default App;
