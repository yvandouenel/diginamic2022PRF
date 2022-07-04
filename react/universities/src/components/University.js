const University = (props) => {
  return (
    <section className="col-md-4">
      <div className="border border-1 p-2 mb-3">
        <h2>{props.univ.name}</h2>
        <p>{props.univ.web_pages[0]}</p>
      </div>
    </section>
  );
}

export default University;