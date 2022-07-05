const Card = (props) => {
  return (
    <article className="text-white mb-4 rounded bg-secondary p-3">
      <h4>{props.name}</h4>
    </article>
  );
}

export default Card;