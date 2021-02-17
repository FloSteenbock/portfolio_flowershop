import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://i.ibb.co/k2BTpw7/Flos-Flowers.png"
        />
      </Link>
      <div className="login_container">
        <h1>Login</h1>
        <form>
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

          <button type="submit" onClick={signIn} className="login_signInButton">
            Login
          </button>
        </form>

        <p>
          Mit Ihrer Anmeldung erklären Sie sich mit unseren Allgemeinen
          Geschäftsbedingungen einverstanden. Bitte lesen Sie unsere
          Datenschutzerklärung, unsere Hinweise zu Cookies und unsere Hinweise
          zu interessenbasierter Werbung.
        </p>

        <Link to="/signup">
          <button className="login_registerButton">
            Erstellen Sie Ihr eigenes Konto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
