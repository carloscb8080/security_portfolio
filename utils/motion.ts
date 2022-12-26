import { Variants } from "framer-motion";

export const reboundVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-50%",
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

interface FadeInProps {
  direction?: "left" | "right" | "up" | "down";
  type?: "spring" | "tween" | "keyframes";
  delay?: number;
  duration?: number;
}

export const fadeIn: (p: FadeInProps) => Variants = ({
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 1.25,
}) => ({
  hidden: {
    x: direction === "left" ? 200 : direction === "right" ? -200 : 0,
    y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
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

export const rotateAndTranslate: (d?: number) => Variants = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: "-100%",
    rotate: -90,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      delay,
      duration: 1.25,
    },
  },
});
