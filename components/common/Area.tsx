import React from "react";
import { RefCallBack } from "react-hook-form/dist/types/form";
interface AreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  inputRef?: RefCallBack;
  error?: string;
}
export const Area: React.FC<AreaProps> = ({
  label,
  inputRef,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.id} className="text-gray-600">
        {label}
        <textarea
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
