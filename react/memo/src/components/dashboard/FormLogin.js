const FormLogin = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="login">
        Login :
      </label>
      <input type="text" id="login" />
      <label htmlFor="pwd">
        Mot de passe :
      </label>
      <input type="password" id="pwd" />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default FormLogin;