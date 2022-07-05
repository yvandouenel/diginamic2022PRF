export default class MemopusData {
  static url_server = 'https://coopernet.fr';
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
    console.log("dans getUser", this.token);
    //console.log(login, pwd, this.token);
    // utilisation de fetch
    return fetch(this.url_server + "/user/login?_format=json", {
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
          console.log("user", data.current_user);
          this.user = {};
          this.user.uid = data.current_user.uid;
          this.user.uname = data.current_user.name;
          this.user.upwd = pwd;
        }
      });
    
  };
  getTerms = () => {
    console.log("Dans getTerms ");
    fetch(this.url + "/memo/themes/" + this.user.uid, {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": this.token,
        Authorization: "Basic " + btoa(this.user.uname + ":" + this.user.pwd), // btoa = encodage en base 64
      },
    })

      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("data reçues dans getTerms :", data);
        success(data);
      })
      .catch((error) => {
        console.log("error catché dans getTerms", error);
        failed(error);
      });
  };
}