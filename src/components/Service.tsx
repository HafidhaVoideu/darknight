import { easeIn, motion } from "framer-motion";
import { IconType } from "react-icons";

type ServiceProps = {
  name: string;
  Icon: IconType;
  des: string;
};

const Service = ({ name, des, Icon }: ServiceProps) => {
  return (
    <motion.article
      initial={{ y: -29, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: easeIn,
        type: "spring",
        stiffness: 90,
        delay: 0.1,
        damping: 10,
      }}
      className={` text-grey  service shadow-2  bg-[#121212]   flex flex-col lg:flex-row  gap-8 md:gap-12 items-center justify-center border-solid px-4 py-7 xl:p-8   border-y-1
      `}
    >
      <div className="flex flex-col items-center gap-2  md:gap-4">
        <div className="text-5xl  text-crimson">
          <Icon />
        </div>
        <h1 className="text-crimson text-lg sm:text-xl text-center">{name}</h1>
      </div>

      <p className="  text-center md:text-left leading-7  text-sm sm:text-md  md:text-lg  ">
        {des}
      </p>
    </motion.article>
  );
};

export default Service;
