/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TextField, Button } from "@mui/material";

const SignUp = ({ loginFunc }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start space-y-4">
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="filled"
          size="small"
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="filled"
          size="small"
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
        />
        <TextField
          fullWidth
          id="password-confirm"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
        />
      </div>
      <div className="absolute bottom-12">
        <div className=" mt-8">
          <Button
            fullWidth
            sx={{
              backgroundColor: "rgba(30, 58, 138)",
            }}
            variant="contained"
            onClick={loginFunc}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
