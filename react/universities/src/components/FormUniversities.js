const FormUniversities = (props) => {
  return (
    <form onSubmit={props.onSubmitCountry}>
      <label htmlFor='coutry'>
        Pays :
      </label>
      <select id="country">
        <option value="">Choisissez un pays</option>
        <option value="France">France</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Spain">Espagne</option>
      </select>
      <label htmlFor='name'>
        Filtre :
      </label>
      <input type="text"  onChange={props.onChangeUnivesityName}/>


      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default FormUniversities;