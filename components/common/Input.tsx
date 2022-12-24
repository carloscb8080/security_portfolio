export interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

import React, { FC } from "react";

export const Input: FC<Input> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor={props.id} className="text-gray-600">
        {label}
        <input
          {...props}
          className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
        />
      </label>
    </div>
  );
};
