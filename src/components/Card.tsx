import { motion } from "framer-motion";
import profile from "../assets/profile.png";

// import Tilt from "react-vanilla-tilt";
const Card = () => {
  const card = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div variants={card} className="card  ">
      <article className="  flex flex-col gap-14 items-center justify-between  ">
        <img src={profile} alt="profile" className="rounded-full  w-[53%]" />

        <div className="font-bold text-crimson ">
          <h2 className="text-xl">Alejandro Navia </h2>
          <p className="text-center text-golden">Founder NFTnow</p>
        </div>
      </article>
    </motion.div>
  );
};

export default Card;
