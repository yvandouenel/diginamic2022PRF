export default class UniversityData {
  static base_url = 'http://universities.hipolabs.com';
  
  static getUniversities(country) {
    return fetch(`${this.base_url}/search?country=${country}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(`data dans getUniversities: `, data);
      return data;
    });
    
  }
}