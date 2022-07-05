const FormLogin = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="form">
      <label htmlFor="login" className="ms-3 me-2">
        Login :
      </label>
      <input  type="text" id="login" name="login" />
      <label htmlFor="pwd" className="ms-3 me-2">
        Mot de passe :
      </label>
      <input  type="password" id="pwd" name="pwd"/>
      <input className="ms-3 me-2" type="submit" value="Envoyer" />
    </form>
  );
}

export default FormLogin;