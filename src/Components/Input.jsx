import React from "react";

const Input = ({ type, placeholder, label, value, name, change }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        name={name}
        onChange={(e)=>change()}
        value={value}
      />
    </div>
  );
};

export default Input;
