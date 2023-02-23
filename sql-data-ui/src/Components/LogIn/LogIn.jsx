import React, {useState} from "react";
import UserData from "../UserData";

function LogIn() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const dataBase = [
    {
      userName: "ilgas@tiltas.lt",
      password: "pass1"
    },
  ];

  const users = [
    {
      userName: "Mantas",
      lastName: "Januska",
      contract: 1254963,
      id: 1,
      status: true
    },
    {
      userName: "Algis",
      lastName: "Kubilius",
      contract: 36598775,
      id: 2,
      status: true
    },
    {
      userName: "Darius",
      lastName: "Januska",
      contract: 2364852,
      id: 3,
      status: true
    }
  ]
console.log(typeof dataBase)
  const errors = {
    uname: "Neteisingas vartotojo vardas",
    pass: "Neteisingas slaptažodis"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = dataBase.find((user) => user.userName === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-form">
      <div className="title">Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="main-ui-container">
        {isSubmitted ? <UserData data={users}/> : renderForm}
      </div>
    </div>
  );
}

export default LogIn;