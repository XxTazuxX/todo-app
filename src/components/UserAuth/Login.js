/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TextField, Button } from "@mui/material";

const Login = ({ loginFunc }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start space-y-4">
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
      </div>
      <div className="absolute bottom-12">
        <div className="mt-8">
          <Button
            sx={{
              width: "90%",
              backgroundColor: "rgba(30, 58, 138)",
            }}
            variant="contained"
            onClick={loginFunc}
          >
            Login
          </Button>
        </div>
        <p className="mt-3 font-thin text-sm">
          Forgot your password?{" "}
          <a className="text-blue-900" href="#">
            Forgot Password
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
