import React from "react";
import classes from "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
