import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex flex-col items-center gap-3  my-14  lg:my-20">
      <motion.h1
        className=" text-effect  text-[2.6rem] sm:text-5xl  md:text-7xl  font-Theading text-crimson text-center uppercase  leading-snug"
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Title;
