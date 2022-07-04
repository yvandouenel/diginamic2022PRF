const FormUniversities = (props) => {
  function getInput() {
    if(props.count) {}
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <label htmlFor='coutry'>
        Pays :
      </label>
      <select id="country" onChange={props.onChangeCountry} >
        <option value="">Choisissez un pays</option>
        <option value="France">France</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Spain">Espagne</option>
        <option value="Andorra">Andorre</option>
      </select>
      {props.count > 0 && (
        <>
          <label htmlFor='name'>
            Filtre :
          </label>
          <input type="text" value={props.search_text} onChange={props.onChangeUnivesityName} />
        </>
      )}
    </form>
  );
}

export default FormUniversities;