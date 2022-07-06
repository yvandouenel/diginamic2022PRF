import Column from "./columns/Column";
const TableMemo = (props) => {
  return (
    <section>
      <h2>{props.term}</h2>
      <section className="row">
        {props.columns.map(column => <Column key={column.id} column={column} />)}
      </section>
    </section>
  );
}

export default TableMemo;