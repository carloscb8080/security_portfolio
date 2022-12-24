import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const TimeLine: FC<Props> = ({ children }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  );
};
