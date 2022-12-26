import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../../utils/motion";
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
      {subtitle && (
        <div className="overflow-hidden">
          <motion.h6
            initial="hidden"
            whileInView="show"
            variants={fadeIn({
              direction: "right",
            })}
            className="text-indigo-500"
          >
            {subtitle}{" "}
          </motion.h6>
        </div>
      )}
      <div className="relative ">
        <div className="overflow-hidden p-2 before:content-start before:contend-[' '] before:absolute before:top-0 before:-left-5 before:h-12 before:aspect-square before:bg-indigo-500 before:rounded-tl-[65%] before:rounded-br-[35%] before:rounded-tr-[55%] before:rounded-bl-[45%] before:z-[-1] before:-rotate-180  ">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={fadeIn({
              direction: "left",
            })}
            className={"leading-none text-4xl lg:text-6xl" + className}
          >
            <span className={variant === "primary" ? classStroke : "relative"}>
              {firstWord}{" "}
            </span>
            <span className={variant === "primary" ? "relative" : classStroke}>
              {title}
            </span>
            <span className="text-indigo-500">{lastWord}</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
