import { Variants } from "framer-motion";

export const reboundVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 100,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.2,
    },
  },
};

export const textVariant: (d: number) => Variants = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

interface FadeInProps {
  direction: "left" | "right" | "up" | "down";
  type: "spring" | "tween" | "keyframes";
  delay: number;
  duration: number;
}

export const fadeIn: (p: FadeInProps) => Variants = ({
  direction,
  type,
  delay,
  duration,
}) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
