import Card from "./Card";
const Column = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <Card name="Question 1" />
      <Card name="Question 2" />
    </section>
  );
}

export default Column;