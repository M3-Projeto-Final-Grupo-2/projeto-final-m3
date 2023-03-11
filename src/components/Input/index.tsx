import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  label: string;
  type: "text" | "password" | "email";
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: string;
  children?: React.ReactNode;
}

const Input = ({ label, type, id, placeholder, register, error, children }: IInput) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {error && <p>{error}</p>}
      {children}
    </fieldset>
  );
};

export default Input;
