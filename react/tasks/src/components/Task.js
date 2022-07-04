import Button from 'react-bootstrap/Button';
const Task = (props) => {
  // Destructuring object
  const { label, is_completed } = props.task;
  console.log(`is_completed`, is_completed);
  return (
    <section className='d-flex m-3 justify-content-between  border-bottom border-primary'>
      <h2 className={is_completed ? 'text-decoration-line-through' : ''}>{label}</h2>
      <div>
        <Button
          onClick={ props.handleClickValidateTask}
          className="btn btn-warning ms-3">Valider</Button>
        <Button
          className="btn btn-danger ms-3"
          onClick={props.handleClickDeleteTask}
        >Supprimer</Button>
      </div>
    </section>
  );
}

export default Task;