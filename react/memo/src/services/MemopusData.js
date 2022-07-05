export default class MemopusData {
  static url_server = 'https:www.coopernet.fr';
  static token = "";
  static user = null;

  static getToken = () => {
    console.log(`Dans getToken`);
    return fetch(`${this.url_server}/session/token/`)
      .then((response) => {
        if (response.status !== 200) { // si ça c'est mal passé
          throw new Error("Le serveur n'a pas répondu correctement");
        } else return response.text(); // renvoie une promesse
      })
      .then((token) => {
        this.token = token;
        
      });
  }
  static getUser = (login, pwd) => {
    console.log("dans getUser");
    //console.log(login, pwd, this.token);
    // utilisation de fetch
    fetch(this.url_server + "user/login?_format=json", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": this.token
      },
      body: JSON.stringify({
        name: login,
        pass: pwd
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.current_user === undefined) {
          console.log("Erreur de login");
          throw new Error("Erreur de data : ", data);
        } else {
          //console.log("user", data.current_user);
          this.user.uid = data.current_user.uid;
          this.user.uname = data.current_user.name;
          this.user.upwd = pwd;
        }
      })
      .catch(error => { console.error("Erreur attrapée dans tokenSuccess", error) });
    
  };
}