import TableMemo from "./TableMemo";
import Term from "./Term";
const Dashboard = () => {
  return (
    <>
      <nav>
        <Term name="css" />
        <Term name="js" />
        <Term name="react" />
      </nav>
      <TableMemo />
    </>
  );
}

export default Dashboard;