import React, { FC } from "react";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  variant?: "contained" | "outlined" | "text";
}
export const Button: FC<Props> = ({
  children,
  color = "indigo",
  variant = "outlined",
  ...props
}) => {
  const outlinedClasses = `border-2 border-${color}-500 py-2 px-4 text-white rounded-3xl font-bold hover:bg-${color}-500 `;
  const textClasses = `bg-transparent hover:bg-${color}-500 text-${color}-500 font-bold hover:text-white py-2 px-4  rounded-full`;
  const containedClasses = `bg-${color}-500 py-2 px-4 text-white rounded-3xl font-bold hover:bg-${color}-900`;

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
