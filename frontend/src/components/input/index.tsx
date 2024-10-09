import React, { FC, useState } from "react";
import { InputProps } from "./@types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Input: FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      {type === "checkbox" ? (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={onChange}
            required={required}
            className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 font-poppins text-xs font-medium">
            {label}
          </label>
        </div>
      ) : (
        <div className="relative">
          <label className="font-poppins text-sm font-medium pb">{label}</label>
          <input
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            value={value as string}
            onChange={onChange}
            required={required}
            className="w-full border-[1px] border-[#D9D9D9] font-poppins text-xs font-medium h-[40px] rounded-[5px] p-2"
          />
          
          {type === "password" && (
            <div onClick={handleTogglePassword} className="absolute inset-y-0 top-[24px] right-0 pr-3 flex items-center">
              {showPassword ? (<FaEyeSlash className="h-5 w-5 text-gray-500" />) : (<FaEye className="h-5 w-5 text-gray-500" />)}
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};
