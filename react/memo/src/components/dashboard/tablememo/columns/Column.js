import Card from "./cards/Card";
const Column = (props) => {


  return (
    <section className="col">
      <div className="d-flex mb-2 mt-2 align-items-start">
        <button
          onClick={props.onClickShowModal}
          className="btn btn-success me-3 "
        >+</button>
        <h3>{props.column.name}</h3>
      </div>
      {props.column.cartes.map((card, index_card) =>
        <Card
          key={card.id}
          card={card}
          index_column={props.index_column}
          index_card={index_card}
        />)}
    </section>
  );
}

export default Column;