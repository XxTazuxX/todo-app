import React, { useRef } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../../firebase/firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      </div>
      <div className="absolute bottom-12">
        <div className="mt-8">
          <ButtonGroup>
            <Button
              type="submit"
              sx={{
                backgroundColor: "rgba(30, 58, 138)",
              }}
              variant="contained"
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: "rgba(74, 102, 201)",
              }}
              variant="contained"
              endIcon={<GoogleIcon />}
              onClick={signInWithGoogle}
            >
              Login With
            </Button>
          </ButtonGroup>
        </div>
        <p className="mt-3 font-thin text-sm">
          Forgot your password?{" "}
          <button className="text-blue-900" href="#">
            Forgot Password
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
