import { easeInOut, motion } from "framer-motion";
import brand from "../assets/brand-logo.png";

const Partner = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: easeInOut,
        delay: 0.1,
      }}
    >
      <div className="p-5  sm:p-8 rounded-full  shadow">
        <img
          src={brand}
          alt="brand-logo"
          className="w-[40px] sm:w-[60px] h-auto"
        />
      </div>

      <h1 className="text-crimson text-center my-8">BItcoin Max</h1>
    </motion.article>
  );
};

export default Partner;
