import '../css/App.css';
import { Component } from 'react';
import UniversityData from '../services/UniversityData';
import University from './University';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: []
    };
  }
  // Appelé au "montage" du composant après le render
  // C'est ici qu'il faut aller chercher d'éventuelles données avec fetch
  async componentDidMount() {
    console.log(`Dans componentDidMount`);
    document.title = "Composant APP monté";

    const universities = await UniversityData.getUniversities("France");
    console.log(`universities`, universities);
    this.setState({ universities: universities });
  }
  // Appelé à la modification du composant après render
  componentDidUpdate() {
    console.log(`Dans componentDidUpdate`);
    document.title = "Composant APP mis à jour";
  }
  
   handleSubmitCountry = async (event) => {
    event.preventDefault();
    console.log(`dans handleSubmitCountry`);
    // Récupération de la value
    const country = event.target.querySelector("select").value;
    const universities = await UniversityData.getUniversities(country);
    console.log(`this`, this);
    this.setState({ universities: universities });
  }

  // Appelé au "montage" du composant après le constructeur
  // Appelé également dans la phase d'update (après modification du state)
  render() {
    
    return (
      <div className='container'>
        <form onSubmit={ this.handleSubmitCountry}>
          <label htmlFor='coutry'>
            Pays :
          </label>
          <select id="country">
            <option value="">Choisissez un pays</option>
            <option value="France">France</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Spain">Espagne</option>
          </select>
          <input type="submit" value="Envoyer" />
        </form>

        <h1>Universités</h1>
        <section className="row ">
          {this.state.universities.map((university, index) =>
            <University key={index} univ={university} />
          )}
        </section>
      </div>
    );
  }
}

export default App;

