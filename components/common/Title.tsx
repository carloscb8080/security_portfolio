import { FC } from "react";
interface Props {
  title: string;
  firstWord: string;
  lastWord?: string;
  className?: string;
  subtitle?: string;
  isDark?: boolean;
  variant?: "primary" | "secondary";
}

export const Title: FC<Props> = ({
  title,
  firstWord,
  lastWord,
  className,
  subtitle,
  isDark,
  variant = "primary",
}) => {
  const classStroke = `relative t-stroke ${isDark && "t-stroke--dark"}`;
  return (
    <div>
      {subtitle && <h6 className="text-indigo-500"> {subtitle} </h6>}
      <h1 className={"leading-none " + className}>
        <span className={variant === "primary" ? classStroke : "relative"}>
          <span
            className="absolute bg-indigo-500 w-16 h-16 -z-10  top-4 -left-4"
            style={{
              borderRadius: "65% 35% 55% 45% / 30% 35% 65% 70%",
            }}
          />
          {firstWord}{" "}
        </span>
        <span className={variant === "primary" ? "relative" : classStroke}>
          {title}
        </span>
        <span className="text-indigo-500">{lastWord}</span>
      </h1>
    </div>
  );
};
