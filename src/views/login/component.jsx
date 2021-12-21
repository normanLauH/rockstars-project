import React, { useState, useContext } from "react";
import "./styles.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login as loginUser } from "../../services/user/services";
import { UserContext } from "../../userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext); 
  
  const saveStorage = (token, username) => {
    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("username", JSON.stringify(username))
  }

  const handleSubmit = async e => {
    if(username !== "" || password !== "") {
        e.preventDefault();
        const token = await loginUser({
          username: username,
          password: password
        });
        if(token){
          saveStorage(token, username);
          login(username)
          navigate("/", { replace: true});
        }
    }else {
      console.log("Please introduce your username and password");
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <div className="login-form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </div>
        <div className="signup">
          Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
