import React from "react";

const AuthDetails = ({ name, details, options, authType, setAuth }) => {
  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold pb-4">{name}</h2>
      <p className="font-thin text-md sm:text-sm md:text-md">{details}</p>
      <p className="font-thin text-md sm:text-sm md:text-md">
        {options} ?{" "}
        <button className="font-bold" href="#" onClick={setAuth}>
          {authType}
        </button>
      </p>
    </div>
  );
};

export default AuthDetails;
