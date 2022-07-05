const Term = (props) => {
  return (
    <button
      className="btn btn-secondary m-2"
      onClick={() => {props.onClickTerm(props.term)}}
    >
      {props.term.name}
    </button>
  );
}

export default Term;