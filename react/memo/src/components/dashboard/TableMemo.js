import Column from "./Column";
const TableMemo = (props) => {
  return (
    <section>
      <h2>{props.term}</h2>
      <section>
        <Column title="A apprendre" />
        <Column title="Je sais un peu" />
        <Column title="Je sais bien" />
        <Column title="Je sais parfaitement" />
      </section>
    </section>
  );
}

export default TableMemo;