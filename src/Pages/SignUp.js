import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function SignUp() {
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          auth.user.updateProfile({
            displayName: fullName,
          });
        }
      })
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup_logo"
          src="https://i.ibb.co/k2BTpw7/Flos-Flowers.png"
        />
      </Link>
      <div className="signup_container">
        <h1>Sign-up</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Passwort</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={register} className="signup_signUpButton">
            Erstellen Sie Ihr eigenes Konto
          </button>
        </form>

        <p>
          Mit Ihrer Anmeldung erklären Sie sich mit unseren Allgemeinen
          Geschäftsbedingungen einverstanden. Bitte lesen Sie unsere
          Datenschutzerklärung, unsere Hinweise zu Cookies und unsere Hinweise
          zu interessenbasierter Werbung.
        </p>

        <Link to="/login">
          <button className="signup_loginButton">
            Sie haben bereits ein Konto?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
