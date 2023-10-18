import { easeIn, motion } from "framer-motion";
import Title from "../../components/Title";

const About = () => {
  return (
    <section id="about" className="section">
      <section className="container ">
        <Title text="About" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: easeIn,
          }}
          className="text-left mx-auto w-10/12 text-crimson font-Tparagraph text-md min-[375px]:text-center  sm:text-lg lg:text-xl leading-7 "
        >
          Darknight Labs is an NFT Strategy, Marketing and Partnership agency.
          Known for providing paradigm-shifting strategies to ensure optimal NFT
          drops by their partners, Darknight Labs is one of the most
          well-connected entities in the Web3 space, with hundreds of warm
          connections to founders and core team members from the very best
          projects, communities, VCs and brands in the space.
          <br /> <br />
          Our typical client is a Web2 brand or company that want to enter the
          NFT space in the most optimal way, without replicating the deadly
          mistakes (that we've observed many major brands commit), or a Web3
          project, either a crypto game, a defi platform, a tool or any other
          value-adding product, looking to tap into the NFT community the right
          way, while performing a successful mint.
          <br /> <br />
          In addition, through high level partners, Darknight Labs help their
          partners through other services when needed, such as high tier token
          listings (Binance, KuCoin, Coinbase), blockchain partnerships / grants
          (Polygon, Arbitrum, Binance Chain, Venom, etc), high tier launchpads
          (Polkastarter, DAOmaker, etc.), and more. Darknight Labs is also a
          Web3 founders mastermind with the purpose of making Web3 founders with
          a great product and a healthy mindset synergize, cross-pollinate
          audiences, cross-integrate assets and utilities, and cross-market. The
          goal is to create the ultimate win-win Web3 ecosystem.
        </motion.p>
      </section>
    </section>
  );
};

export default About;
