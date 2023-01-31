import { useState } from "react";

function LogIn() {
  const [errorMessege, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const admins = [
    {
      username: "ilgas@tiltas.lt",
      password: "ilgesnistiltas"
    }
  ]

  
  const errors = {
    uname: "Blogas vartotojo vardas",
    pass: "Neteisingas slaptažodis"
  }
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let {uname, pass} = document.forms[0];

    const adminData = admins.find((user) => user.username === uname.value)
  
    if (adminData) {
      if (adminData.password !== pass.value) {
        setErrorMessage({name: "pass", message: errors.pass})
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessage({ name: "uname", message: errors.uname})
    }
  }
  
  const renderErrorMessage = (name) => {
    name === errorMessege.name && (
      <div className="error">{errorMessege.message}</div>
    );
  };
  
  const renderForm = (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Vartotojas </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Slaptažodis </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
  )

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LogIn;
