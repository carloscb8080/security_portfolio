import { FC } from "react";

export interface ItemContactProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}

export const ContactItem: FC<ItemContactProps> = ({
  icon,
  title,
  text,
  href,
  className,
  ...props
}) => {
  return (
    <div
      className={className + " " + "flex items-center gap-4 mb-2 "}
      {...props}
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="text-xl font-bold leading-none ">{title}</h3>
        <a className="" href={href}>
          {text}
        </a>
      </div>
    </div>
  );
};
