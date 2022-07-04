const University = (props) => {
  return (
    <section>
      <h2>{props.univ.name}</h2>
      <p>{props.univ.web_pages[0]}</p>
    </section>
  );
}

export default University;