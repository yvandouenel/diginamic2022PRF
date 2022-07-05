import TableMemo from "./tablememo/TableMemo";
import Term from "./terms/Term";
import FormLogin from './formlogin/FormLogin';
import MemopusData from "../../services/MemopusData";
import { useState } from "react";

const Dashboard = () => {
  // utilisation du hook d'état
  const [is_logged, setIsLogged] = useState(false);
  const [terms, setTerms] = useState([]);
  const [columns, setColumns] = useState([]);
  const [current_term, setCurrentTerm] = useState("");

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(`dans handleSubmit`);
      const login = e.target.login.value;
      const pwd = e.target.pwd.value;

      // Appel de getUser
      await MemopusData.getUser(login, pwd);
      setIsLogged(true);
      // Appel de getTerms
      const terms_response = await MemopusData.getTerms();
      setTerms(terms_response);
    } catch (error) {
      console.error("Erreur attrapée dans handleSubmitLogin", error);
      setIsLogged(false);
    }

  }
  const handleClickTerm = async(term) => {
    console.log(`dans handleClickTerm`, term.id);
    try {
      const columns_response = await MemopusData.getCards(term.id);
      console.log(`columns_response `, columns_response);
      setCurrentTerm(term.name);
      setColumns(columns_response);
    } catch (error) {
      console.error("Erreur attrapée dans handleSubmitLogin", error);
    }
  }
  return (
    <>
      {!is_logged ? (
        <FormLogin onSubmit={handleSubmitLogin} />
      ) : (
        <>
          <nav>
            {terms.map(term => <Term key={term.id}
              onClickTerm={handleClickTerm}
              term={term}

            />)}
          </nav>
          <TableMemo term={current_term} columns={columns} />
        </>
      )}


    </>
  );
}

export default Dashboard;