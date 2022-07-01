import Button from 'react-bootstrap/Button';
const Task = (props) => {
  return (
    <section className='d-flex m-3 justify-content-between  border-bottom border-primary'>
      <h2>{props.label}</h2>
      <div>
        <Button className="btn btn-warning ms-3">Valider</Button>
        <Button className="btn btn-danger ms-3">Supprimer</Button>
      </div>
    </section>
  );
}

export default Task;