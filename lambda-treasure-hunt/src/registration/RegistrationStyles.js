import { makeStyles } from "@material-ui/core";

const RegistrationStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    height: "340",
    borderRadius: "12px",
    boxShadow: "2px 2px 15px 3px rgba(0,0,0,0.5)",
    margin: "0 auto 0 auto",
    padding: "0px 0px 70px 0px",
    border: "#2980b9 4px solid"
  },

  //Sign-in

  header: {
    fontSize: "4rem",
    padding: "30px"
  },

  form: {
    alignItems: "center",
    backgroundColor: "#",
    display: "flex",
    flexDirection: "column"
  },

  passwordError: {
    color: "red"
  },

  noError: {
    display: "none"
  },

  toAccount: {
    color: "blue",
    fontSize: "1.3rem"
  },

  button: {
    width: "100%",
    border: "1px solid red"
  },
  // sign-up

  headerSignup: {
    fontSize: "4rem",
    padding: "30px"
  },

  formSignup: {
    backgroundColor: "#",
    display: "flex",
    flexDirection: "column"
  },

  toAccountSignup: {
    color: "blue",
    fontSize: "1.3rem"
  }
}));

export default RegistrationStyles;
