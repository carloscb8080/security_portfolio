import React, { FC } from "react";
interface Props {
  children: React.ReactNode;
}
export const SectionLayout: FC<Props> = ({ children }) => {
  return <section className="mb-60">{children}</section>;
};
