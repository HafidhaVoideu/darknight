import React from "react";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

type CustomTextProps = {
  title: string | React.ReactNode;
  textStyles?: string;
};
export const TypingText = ({ title }: CustomTextProps) => (
  <motion.h1
    variants={textContainer}
    className={`    text-[11px]  min-[330px]:text-[14px]  min-[420px]:text-[18px]  min-[500px]:text-[22px]   text-center  lg:text-3xl p-4 text-crimson  capitalize`}
  >
    {Array.from(title as string).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);

export const TitleText = ({ title }: CustomTextProps) => (
  <motion.h1 variants={textVariant2} initial="hidden" whileInView="show">
    {title}
  </motion.h1>
);
