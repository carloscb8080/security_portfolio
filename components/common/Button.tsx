import React, { FC } from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color?: string;
  variant?: "contained" | "outlined" | "text";
  className?: string;
}
export const Button: FC<Props> = ({
  children,
  color = "indigo",
  variant = "outlined",
  className = " ",
  ...props
}) => {
  const disabledClasses = `disabled:opacity-50 disabled:cursor-not-allowed `;
  const outlinedClasses =
    disabledClasses +
    `bg-transparent hover:bg-indigo-500 border-2 border-${color}-500 py-2 px-4 text-white rounded-3xl font-bold ` +
    " " +
    className;
  const textClasses =
    disabledClasses +
    `bg-transparent hover:bg-${color}-500 text-${color}-500 font-bold hover:text-white py-2 px-4 rounded-full` +
    " " +
    className;
  const containedClasses =
    disabledClasses +
    `bg-${color}-500 py-2 px-4 text-white rounded-3xl font-bold hover:bg-${color}-600` +
    " " +
    className;

  return (
    <button
      className={
        variant === "outlined"
          ? outlinedClasses
          : variant === "text"
          ? textClasses
          : containedClasses
      }
      {...props}
    >
      {children}
    </button>
  );
};
