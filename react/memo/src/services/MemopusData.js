export default class MemopusData {
  static url_server = 'https://coopernet.fr';
  static token = "";
  static user = null;

  /**
   * Va chercher le token qui permet de communiquer avec le serveur
   * @returns promise
   */
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

  /**
   * Va chercher les données de l'utilisateur en fonction d'un login et mdp
   * @param {String} login 
   * @param {String} pwd 
   * @returns promise
   */
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

  /**
   * Va chercher les termes qui correspondent à l'utilisateur connecté
   * @returns promise
   */
  static getTerms = () => {
    console.log("Dans getTerms ");
    return fetch(this.url_server + "/memo/themes/" + this.user.uid, {
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
        return data;
      })
      .catch((error) => {
        console.log("error catché dans getTerms", error);

      });
  };
  /**
   * Récupère les données structurées sous forme de json imbriqué
   * @param {Number} term_id 
   * @returns 
   */
  static getCards = (term_id) => {
    return fetch(
      this.url_server +
      "/memo/list_cards_term/" +
      this.user.uid +
      "/" +
      term_id +
      "&_format=json&time=" +
      Math.floor(Math.random() * 10000),
      {
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": this.token,
          Authorization: "Basic " + btoa(this.user.uname + ":" + this.user.upwd), // btoa = encodage en base 64
        },
      }
    )
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse du serveur :  " + response.status);
      })
      .then((data) => {
        console.log("Data dans getCards : ", data);
        return data;
      })
      .catch((error) => {
        console.log("Erreur attrapée dans getCards", error);
      });
  };
}