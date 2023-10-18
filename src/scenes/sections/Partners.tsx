import Title from "../../components/Title";

import Partner from "../../components/Partner";

const Partners = () => {
  return (
    <section id="partners" className="section">
      <div className="container">
        <Title text="Track Record & Partners" />

        <section className="  grid-cols-2  gap-14 lg:gap-24 lg:gap-y-16 min-[370px]:grid-cols-3  md:grid-cols-4   grid   mt-16  place-items-center    ">
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
        </section>
      </div>
    </section>
  );
};

export default Partners;
