import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const isInvalid = password === "" || emailAddress === "";
  const { firebase } = useContext(FirebaseContext);
  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - TwinGram";
  }, []);
  return <div>Login Page</div>;
}

export default Login;
