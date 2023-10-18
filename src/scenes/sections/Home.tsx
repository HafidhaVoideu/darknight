import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { TypingText } from "../../components/CustomText";
import { staggerContainer } from "../../utils/motion";
const Home = () => {
  return (
    <section id="home" className="home-bg py-8">
      <div className="grid justify-items-center gap-y-12 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <img src={logo} alt="logo" className=" dark-img  drop-shadow-2xl " />
        </motion.div>
        <a
          href="#"
          className=" cursor-pointer  text-md  text-crimson  self-start  lg:text-2xl border-solid border-crimson border p-2.5 px-4 "
        >
          Connect To Discord
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
        </a>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TypingText
            title="  The whole is greater than the sum of its parts"
            textStyles="text-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
