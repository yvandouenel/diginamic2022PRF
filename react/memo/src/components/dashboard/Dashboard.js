import TableMemo from "./tablememo/TableMemo";
import Term from "./terms/Term";
import FormLogin from './formlogin/FormLogin';
import MemopusData from "../../services/MemopusData";
import { useState, createContext } from "react";


export const DeleteCardContext = createContext();

const Dashboard = () => {
  // utilisation du hook d'état
  const [is_logged, setIsLogged] = useState(false);
  const [terms, setTerms] = useState([]);
  const [columns, setColumns] = useState([]);
  const [current_term, setCurrentTerm] = useState("");


  const handleClickDeleteCard = (index_column, index_card) => {
    console.log(`Dans handleClickDeleteCard`, index_column, index_card);
    const columns_copy = [...columns];
    console.log(`columns_copy`, columns_copy);
    columns_copy[index_column].cartes.splice(index_card, 1);

    setColumns(columns_copy);
  }

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
  const handleClickTerm = async (term) => {
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
          <nav className="d-flex justify-content-center">
            {terms.map(term => <Term key={term.id}
              onClickTerm={handleClickTerm}
              term={term}

            />)}
          </nav>
          <DeleteCardContext.Provider value={handleClickDeleteCard}>
            <TableMemo term={current_term} columns={columns} />
          </DeleteCardContext.Provider>
        </>
      )}


    </>
  );
}

export default Dashboard;