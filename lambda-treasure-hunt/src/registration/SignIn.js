import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationStyles from "./RegistrationStyles";
import axios from "axios";
import { getThemeProps } from "@material-ui/styles";

const SignIn = props => {
  const classes = RegistrationStyles();

  const onSubmit = () => {
    axios
      .get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init", {
        headers: "Token 0bb7d0b67867e145c61f4ef26abd582b65d9a42e"
      })
      .then(res => {
        localStorage.setItem(
          "token",
          "0bb7d0b67867e145c61f4ef26abd582b65d9a42e"
        );

        console.log(res);
      })
      .then(() => {
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Start Game</h1>

      <Link to="/game">
        <button onClick={onSubmit()}>Game</button>
      </Link>
    </div>
  );
};

export default SignIn;
