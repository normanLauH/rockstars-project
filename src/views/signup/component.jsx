import React, { useState } from "react";
import "./styles.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/user/services";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    try{
      e.preventDefault();
      const token = await signup({
        username: username,
        email: email,
        password: password
      });
      navigate("/Login", { replace: true});
    } catch (error){
      console.log("Error in Sign Up");
      console.log(error);
    }
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <div className="signup-form">
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
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
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
            autoFocus
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            SIGN UP
          </Button>
        </div>
        <div className="login">
          Already have an account? <Link to="/LogIn">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
