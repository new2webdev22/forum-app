import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <form>
        <Typography variant="h4" padding={3} textAlign="center">
          Sign in
        </Typography>

        <TextField
          margin="normal"
          type={"text"}
          variant="outlined"
          placeholder="Username"
        />

        <TextField
          margin="normal"
          type={"email"}
          variant="outlined"
          placeholder="Email"
        />
        <TextField
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Password"
        />
      </form>
    </div>
  );
}

export default Login;
