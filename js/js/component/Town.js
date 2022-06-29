import CustomDom from "../assets/CustomDom.js";

export default class Town extends CustomDom{
  constructor(name, meteo) {
    super();
    this.name = name;
    this.meteo = meteo;

    // appel de render
    this.render();
  }
  render() {
    const section = this.createMarkup("section","", document.body);
    this.createMarkup("h1",this.name, section);
  }
}