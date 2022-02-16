/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const SignUp = () => {
  const [error, setError] = useState("");
  const [signUpUser, setSignUpUser] = useState({
    email: "",
    password: "",
    passwordConf: "",
  });

  useEffect(() => {
    if (signUpUser.password !== signUpUser.passwordConf) {
      return setError("Password Did Not Match!!");
    } else setError("");
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpUser({
      ...signUpUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-start space-y-4">
        <TextField
          name="email"
          value={signUpUser.email}
          onChange={handleInput}
          fullWidth
          label="Email"
          variant="filled"
          size="small"
          required
        />
        <TextField
          name="password"
          value={signUpUser.password}
          onChange={handleInput}
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
          required
        />
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          name="passwordConf"
          value={signUpUser.passwordConf}
          onChange={handleInput}
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
          required
        />
      </div>
      <div className="absolute bottom-12">
        <div className=" mt-8">
          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "rgba(30, 58, 138)",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
