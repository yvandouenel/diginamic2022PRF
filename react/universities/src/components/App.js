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

    const universities = await UniversityData.getUniversities("Luxembourg");
    console.log(`universities`, universities);
    this.setState({universities : universities});
  }
  // Appelé à la modification du composant après render
  componentDidUpdate() {
    console.log(`Dans componentDidUpdate`);
    document.title = "Composant APP mis à jour";
  }
  // Appelé au "montage" du composant après le constructeur
  // Appelé également dans la phase d'update (après modification du state)
  render() {
    return (
      <>
        <h1>Universités</h1>
        <section>
          {this.state.universities.map((university, index) =>
            <University key={index} univ={university} />
          )}
        </section>
      </>
    );
  }
}

export default App;

