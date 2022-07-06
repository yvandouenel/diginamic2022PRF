import Card from "./cards/Card";
const Column = (props) => {

  
  return (
    <section  className="col">
      <h3>{props.column.name}</h3>
      {props.column.cartes.map(card => <Card key={card.id} card={card} />)}
    </section>
  );
}

export default Column;