import '../css/App.css';
import { Component } from 'react';
import UniversityData from '../services/UniversityData';
import University from './University';
import FormUniversities from './FormUniversities';

class App extends Component {
  constructor(props) {
    super(props);
    this.country_universities = [];
    this.state = {
      universities: []
    };
  }
  // Appelé au "montage" du composant après le render
  // C'est ici qu'il faut aller chercher d'éventuelles données avec fetch
  async componentDidMount() {
    console.log(`Dans componentDidMount`);
    document.title = "Composant APP monté";
  }
  // Appelé à la modification du composant après render
  componentDidUpdate() {
    console.log(`Dans componentDidUpdate`);
    document.title = "Composant APP mis à jour";
  }

  handleChangeCountry = async (event) => {
    
    console.log(`dans handleSubmitCountry`);
    // Récupération de la value
    const country = event.target.value;
    this.country_universities = await UniversityData.getUniversities(country);
    console.log(`this`, this);
    this.setState({ universities: this.country_universities });
  }
  handleChangeUnivesityName = (event) => {
    console.log(`Dans handleChangeUnivesityName`);
    
    const search_txt = event.target.value;
    if(search_txt.length > 2) {
      const filtered_universities = this.state.universities.filter(university => {
        return university.name.toLowerCase().includes(search_txt.toLowerCase());
      });
      this.setState({universities:filtered_universities});
    }
  }

  // Appelé au "montage" du composant après le constructeur
  // Appelé également dans la phase d'update (après modification du state)
  render() {

    return (
      <div className='container'>
        <FormUniversities
          onChangeCountry={this.handleChangeCountry}
          onChangeUnivesityName={this.handleChangeUnivesityName}
          count={this.state.universities.length}
        />

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

