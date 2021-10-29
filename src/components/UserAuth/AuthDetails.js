/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const AuthDetails = ({ name, details, options, authType, setAuth }) => {
  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold pb-4">{name}</h2>
      <p className="font-thin text-md sm:text-sm md:text-md">{details}</p>
      <p className="font-thin text-md sm:text-sm md:text-md">
        {options} ?{" "}
        <a className="font-bold" href="#" onClick={setAuth}>
          {authType}
        </a>
      </p>
    </div>
  );
};

AuthDetails.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
  options: PropTypes.string,
  authType: PropTypes.string,
  setAuth: PropTypes.func,
};

export default AuthDetails;
