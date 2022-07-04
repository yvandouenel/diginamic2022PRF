import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import { Component } from 'react';
import Task from './Task';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { label: 'Aller boire une bière', is_completed: false },
        { label: 'Faire le ménage', is_completed: false },
      ]
    };
  }
  handleClickDeleteTask = (index) => {
    console.log(`dans handleClickDeleteTask`, index);

    if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
      // Modification du state
      this.setState({ tasks: this.state.tasks.filter((task, i) => index != i) });
    }
  }
  handleClickValidateTask = (index) => {
    console.log(`dans handleClickDeleteTask`, index);
    // Copie du state
    const copy_state = { ... this.state };
    // Modification de la copie du state
    copy_state.tasks[index].is_completed = !copy_state.tasks[index].is_completed;


    if (copy_state.tasks[index].is_completed) {
      // Suppression de l'élément avec splice
      const deleted_tasks = copy_state.tasks.splice(index, 1);
      // Ajout de l'élément supprimé à la fin du tableau
      copy_state.tasks.push(deleted_tasks[0]);
    } else {
      // Suppression de l'élément avec splice
      const deleted_tasks = copy_state.tasks.splice(index, 1);
      copy_state.tasks.unshift(deleted_tasks[0]);
    }

    // Modification du state
    this.setState(copy_state);
  }

  handleSubmitAddTask = (event) => {
    event.preventDefault();
    console.log(`dans handleSubmitAddTask`);
    const label_new_task = event.target.elements["label"].value;
    console.log(`label_new_task`, label_new_task);

    // Mise à jour du state
    this.setState({ tasks: [{ label: label_new_task }, ...this.state.tasks] });
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={(e) => { this.handleSubmitAddTask(e) }}>
          <label htmlFor='label'>Nom de la tâche :</label>
          <input type="text" id="label" />
          <input type="submit" value="Ajouter" />
        </form>


        {this.state.tasks.map((task, index) =>
          <Task
            key={index}
            task={task}
            handleClickDeleteTask={() => { this.handleClickDeleteTask(index) }}
            handleClickValidateTask={() => { this.handleClickValidateTask(index) }}
          />)}
      </div>
    );
  }
}

export default App;
