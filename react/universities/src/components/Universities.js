import '../css/App.css';
import { Component } from 'react';
import UniversityData from '../services/UniversityData';
import University from './University';
import FormUniversities from './FormUniversities';


class Universities extends Component {
  constructor(props) {
    super(props);
    this.country_universities = [];
    this.state = {
      universities: [],
      search_text: "",
      error_msg: ""
    };
  }
  // Appelé au "montage" du composant après le render
  // C'est ici qu'il faut aller chercher d'éventuelles données avec fetch
  async componentDidMount() {
    console.log(`Dans componentDidMount`);
    document.title = "Composant APP monté";
  }
  // Appelé à la modificatiofetchn du composant après render
  componentDidUpdate() {
    console.log(`Dans componentDidUpdate`);
    document.title = "Composant APP mis à jour";
  }

  handleChangeCountry = async (event) => {
    try {
      console.log(`dans handleSubmitCountry`);
      // Récupération de la value
      const country = event.target.value;
      this.country_universities = await UniversityData.getUniversities(country);
      console.log(`this`, this);
      // 
      this.setState({
        universities: this.country_universities,
        search_text: ""
      });

    } catch (error) {

      console.error("Erreur attrapé dans handleChangeCountry : ", error);
      this.setState({
        error_msg: "Erreur de communication avec le serveur, contactez JP. "
          + error
      })
    }
  }
  handleChangeUnivesityName = (event) => {
    console.log(`Dans handleChangeUnivesityName`);

    const search_txt = event.target.value;

    this.setState({ search_text: search_txt });


    // Attention, ici on filtre non pas le tableau du state mais
    // le tableau country_universities qui est une propriété à part
    const filtered_universities = this.country_universities.filter(university => {
      return university.name.toLowerCase().includes(search_txt.toLowerCase());
    });
    this.setState({ universities: filtered_universities });

  }

  // Appelé au "montage" du composant après le constructeur
  // Appelé également dans la phase d'update (après modification du state)
  render() {

    return (
      <div className='container'>

        {this.state.error_msg != "" && (
          <h2 className="text-danger">{this.state.error_msg}</h2>
        )}
        <FormUniversities
          onChangeCountry={this.handleChangeCountry}
          onChangeUnivesityName={this.handleChangeUnivesityName}
          count={this.state.universities.length}
          search_text={this.state.search_text}
        />

        <h1>Universités ({this.state.universities.length} résultats)</h1>
        <section className="row ">
          {this.state.universities.length > 50 ? (
            "Trop de résultats "
          ) : (
            this.state.universities.map((university, index) =>
              <University key={index} univ={university} />
            )
          )}
        </section>
        
      </div>
    );
  }
}

export default Universities;

