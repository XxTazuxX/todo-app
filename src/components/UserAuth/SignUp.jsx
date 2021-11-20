/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";

const SignUp = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError("Password Did Not Match!!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-start space-y-4">
        <TextField
          ref={emailRef}
          fullWidth
          id="email"
          label="Email"
          variant="filled"
          size="small"
          required
        />
        <TextField
          ref={passwordRef}
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
          required
        />
        <TextField
          ref={passwordConfRef}
          fullWidth
          id="password-confirm"
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
