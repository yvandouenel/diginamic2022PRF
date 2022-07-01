import 'bootstrap/dist/css/bootstrap.min.css';
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
  handleSubmitAddTask = (event) => {
    event.preventDefault();
    console.log(`dans handleSubmitAddTask`);
    const label_new_task = event.target.elements["label"].value;
    console.log(`label_new_task`, label_new_task);
    // Mise à jour du state
   
    this.setState({tasks: [...this.state.tasks, {label: label_new_task}]});
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={(e) => {this.handleSubmitAddTask(e)}}>
          <label htmlFor='label'>Nom de la tâche :</label>
          <input type="text" id="label"/>
          <input type="submit" value="Ajouter" />
        </form>


        {this.state.tasks.map((task, index) => <Task key={index} label={task.label} />)}
      </div>
    );
  }
}

export default App;
