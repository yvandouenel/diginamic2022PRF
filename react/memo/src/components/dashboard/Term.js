const Term = (props) => {
  return (
    <button className="btn btn-secondary m-2">{props.term.name}</button>
  );
}

export default Term;