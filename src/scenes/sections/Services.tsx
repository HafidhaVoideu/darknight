import { motion } from "framer-motion";
import Service from "../../components/Service";
import Title from "../../components/Title";
import { services } from "../../data/data";

const Services = () => {
  return (
    <section id="services" className="section">
      <section className="container ">
        <Title text="Services" />

        <motion.section className="grid grid-cols-1 justify-items-center lg:grid-cols-2  gap-y-16  gap-x-16 w-full mb-16 ">
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </motion.section>
      </section>
    </section>
  );
};

export default Services;
