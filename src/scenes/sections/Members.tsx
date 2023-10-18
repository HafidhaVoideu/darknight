import { easeIn, motion } from "framer-motion";
import Title from "../../components/Title";
import profile from "../../assets/profile.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: easeIn,
    },
  },
};

const card = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Card = () => {
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

const Members = () => {
  return (
    <section id="members" className="section">
      <section className="container ">
        <Title text=" The win-Win  Society" />

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          className="   grid  grid-cols-1  min-[600px]:grid-cols-2 md:grid-cols-3   lg:grid-cols-4  place-items-center  "
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </motion.section>
      </section>
    </section>
  );
};

export default Members;
