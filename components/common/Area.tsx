import React from "react";
interface AreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export const Area: React.FC<AreaProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor={props.id} className="text-gray-600">
        {label}
        <textarea
          {...props}
          className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
        />
      </label>
    </div>
  );
};
