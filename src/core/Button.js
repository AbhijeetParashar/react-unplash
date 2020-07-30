import React from "react";
import "../assets/styles/Button.css";

const Button = ({ onClick, className, disabled, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="button"
      {...props}
    />
  );
};

export default Button;
