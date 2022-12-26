import React, { FC } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const SectionLayout: FC<Props> = ({ children, className, ...props }) => {
  return (
    <section className={"mb-10 sm:mb-30 lg:mb-60 " + className} {...props}>
      {children}
    </section>
  );
};
