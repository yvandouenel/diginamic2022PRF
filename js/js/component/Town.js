import CustomDom from "../assets/CustomDom.js";

export default class Town extends CustomDom{
  constructor(name, meteo) {
    super();
    this.name = name;
    this.meteo = meteo;

    // appel de render
    this.section = this.render();
  }
  remove() {
    this.section.remove();
  }
  render() {
    const section = this.createMarkup("section","", document.body);
    this.createMarkup("h1",this.name, section);
    this.createMarkup("h2",`Température : ${this.meteo.temp}°C`, section);
    this.createMarkup("h2",`Description : ${this.meteo.description}`, section);
    this.createMarkup("h2",`Vent : ${this.meteo.wind} noeuds`, section);

    return section;
  }
}