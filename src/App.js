/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import LoginPage from "./components/UserAuth/LoginPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  const [login, setLogin] = useState(false);

  const loginFunc = () => {
    setLogin(!login);
  };

  return (
    <div>
      {login ? (
        <>
          <Navbar loginFunc={loginFunc} />
          <Home />
        </>
      ) : (
        <LoginPage loginFunc={loginFunc} />
      )}
    </div>
  );
};

export default App;
