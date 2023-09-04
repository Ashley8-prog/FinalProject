import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const register = async () => {
    //Sección de verificación
    if (password == "" || email == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor llene ambos campos!",
        /* footer: '<a href="">Why do I have this issue?</a>' */
        timer: 3500,
      });
      return;
    }

    //Sección para enviar la data al backend
    let obj = {
      email: email,
      password: password,
    };

    let response = await actions.fetchPromise("/api/signup", "POST", obj);

    if (response.ok) {
      let responseJson = await response.json();
      console.log(responseJson);
      Swal.fire({
        position: "center",
        icon: "success",
        title: responseJson.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let responseJson = await response.json();
      console.log(responseJson);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al registrar!",
        /* footer: '<a href="">Why do I have this issue?</a>' */
        timer: 3500,
      });
    }
    return;
  };

  return (
    <>
      {/* <div className="container">
        <div className="row d-flex">
          <div className="col-sm-6 col-md-4">
            <span>Email:</span>
          </div>
          <div className="col-sm-6 col-md-4">
            <input
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-sm-6 col-md-4">
            <span>Password</span>
          </div>
          <div className="col-sm-6 col-md-4">
            <input
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            ></input>
          </div>
        </div>
        <div className="row d-flex">
          <button type="button" onClick={register}>
            Registrar
          </button>
        </div>
      </div> */}

      {/* Aqui empieza */}
      <div className="contenedor">
        <body class="align">
          <div class="login">
            <header class="login__header">
              <h2>
                <svg class="icon">{/* <use xlink:href="#icon-lock" /> */}</svg>
                Sign In
              </h2>
            </header>

            <form action="#" class="login__form" method="POST">
              <div>
                <label for="email">E-mail address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className=" elboton row d-flex">
                <button className="elboton" type="button" onClick={register}>
                  Register
                </button>
              </div>
            </form>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" class="icons">
            <symbol id="icon-lock" viewBox="0 0 448 512">
              <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
            </symbol>
          </svg>
        </body>
      </div>
    </>
  );
};

export default SignUp;
