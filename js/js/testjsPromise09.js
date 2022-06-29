// fonction anonyme immédiate pour éviter d'avoir des variables globales
(function () {
  getToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          const token = "qsdfEDLSoie5d8899;dEDd"
          console.log('Token ok');
          resolve(token);// renvoie le résultat à la méthode "then()"
        } else reject(new Error("Pas de chance, vous n'avez pas pu obtenir de token"));// renvoie le résultat à la méthode "catch"
      }, 2000)
    })
  }
  getUser = (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2 && token) {
          const user = {login:"toto", uid: 123};
          console.log('user ok');
          resolve(user);// renvoie le résultat à la méthode "then()"
        } else reject(new Error("Pas de chance, l'utilisateur n'est pas identifé"));// renvoie le résultat à la méthode "catch"
      }, 2000)
    })
  }
  getProfile = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2 && user) {
          const user_profile = {name:"toto",email: "qsdf@qsdf.fr"};
          console.log('profile ok');
          resolve(user_profile);// renvoie le résultat à la méthode "then()"
        } else reject(new Error("Pas de chance, l'utilisateur n'a pas de profil"));// renvoie le résultat à la méthode "catch"
      }, 2000)
    })
  }
  // Appel de getTocken
 /*  {
    getToken()
    .then(token => {
      console.log(`token `, token);
      return getUser(token);// retourne une promesse donc chaînable
    })
    .then(user => {
      console.log(`data : `, user);
      return getProfile(user);// retourne une promesse donc chaînable

    })
    .then(profile => {
      console.log(`profile `, profile);
    })
    .catch(error => {
      console.error(error);
    })
  }
   */

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.60856732734874&lon=3.8764019364725097&appid=8d1ea57f5c7bb682b127c50f23b95b2b&lang=fr&units=metric`)
    .then(response => {
      console.log(`statut : `, response.status);
      if(response.status == 200) {
        return response.json(); // Teste si c'est bien du json en renvoyant une promesse
      }
    })
    .then(data => {
      console.log(`data : `, data);
    })
    .catch(error => {
      console.error(error);
    })

    http://api.openweathermap.org/geo/1.0/direct?q=Montpellier,,fra&limit=1&appid=8d1ea57f5c7bb682b127c50f23b95b2b
    



    
})();