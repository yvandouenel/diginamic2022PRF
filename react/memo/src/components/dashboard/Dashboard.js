import TableMemo from "./TableMemo";
import Term from "./Term";
import FormLogin from './FormLogin';
import MemopusData from "../../services/MemopusData";

const Dashboard = () => {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(`dans handleSubmit`);
  }
  return (
    <>
      {MemopusData.user == null ? (
        <FormLogin onSubmit={handleSubmitLogin} />
      ) : (
        <>
          <nav>
            <Term name="css" />
            <Term name="js" />
            <Term name="react" />
          </nav>
          <TableMemo term="js" />
        </>
      )}


    </>
  );
}

export default Dashboard;