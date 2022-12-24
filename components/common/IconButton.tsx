import React, { FC } from "react";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}
export const IconButton: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={
        "text-2xl w-10 h-10 text-indigo-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600 hover:text-gray-50" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};
