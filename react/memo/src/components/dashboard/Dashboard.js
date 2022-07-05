import TableMemo from "./TableMemo";
import Term from "./Term";
import FormLogin from './FormLogin';
import MemopusData from "../../services/MemopusData";
import { useState } from "react";

const Dashboard = () => {
  // utilisation du hook d'état
  const [is_logged, setIsLogged] = useState(false);
  const [terms, setTerms] = useState([]);

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
  return (
    <>
      { !is_logged ? (
        <FormLogin onSubmit={handleSubmitLogin} />
      ) : (
        <>
          <nav>
            {terms.map(term => <Term key={term.id} term={term} />)}
          </nav>
          <TableMemo term="js" />
        </>
      )}


    </>
  );
}

export default Dashboard;