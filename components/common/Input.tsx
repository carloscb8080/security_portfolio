export interface Input
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  inputRef?: RefCallBack;
}

import React, { FC } from "react";
import { RefCallBack } from "react-hook-form/dist/types";

export const Input: FC<Input> = ({ label, error, inputRef, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.id} className="text-gray-600">
        {label}
        <input
          ref={inputRef}
          {...props}
          className={`w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 ${
            error ? "border-red-500" : ""
          }`}
        />
      </label>

      <span className="text-red-500 text-xs h-4">{error}</span>
    </div>
  );
};
