import React, { FC } from "react";
import { ButtonProps } from "./@types";

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} type="submit" className={`w-full rounded font-poppins text-sm font-bold text-white h-[40px] ${disabled ? 'bg-gray-400' : 'bg-[#3A5B22]'}`} disabled={disabled}>
      {children}
    </button>
  );
};