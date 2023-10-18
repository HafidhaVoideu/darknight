import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { TbArrowMergeBoth } from "react-icons/tb";

type ListProps = {
  style: "desktop" | "mobile";
  isMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [tab, setTab] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 700) setShowTopButton(true);
    else setShowTopButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const List = ({ style, isMenu }: ListProps) => {
    const desktopStyle = ` text-white  hover:text-coquelicot duration-300 text-lg `;

    const mobileStyle =
      "text-white hover:text-green sm:text-3xl    duration-300";
    const menu = [
      { tag: "Home", ref: "#home" },
      { tag: "Services", ref: "#services" },
      { tag: "Members", ref: "#members" },
      { tag: "Partners", ref: "#partners" },
      { tag: "About", ref: "#about" },
    ];
    return menu.map((item) => (
      <li
        key={item.tag}
        onClick={() => isMenu(false)}
        className={`${
          style === "desktop" ? desktopStyle : mobileStyle
        }  hover:text-gray   font-Theading duration-300  `}
      >
        <a
          href={item.ref}
          onClick={() => setTab(item.tag)}
          className={tab === item.tag ? "active-link" : undefined}
        >
          {" "}
          {item.tag}{" "}
        </a>
      </li>
    ));
  };

  return (
    <header
      className={`sticky inset-0 z-40  bg-black flex justify-center  items-center px-2  h-[9vh] md:h-[9vh] lg:h-[10vh]  md:px-6  drop-shadow-lg `}
    >
      <img
        src={logo}
        alt="logo"
        className="w-10 h-10 md:w-12 md:h-12    mr-auto"
      />

      {/* Mobile nav */}

      <button
        onClick={() => setIsMenu(true)}
        className="block lg:hidden bg-primary p-2   text-white rounded-md   text-2xl  sm:text-3xl"
      >
        <HiMenu />
      </button>

      {isMenu && (
        <motion.nav
          initial={{ y: "-100vh" }}
          animate={{ y: "0vh" }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          className=" min-h-screen w-screen  fixed inset-0   flex flex-col items-center justify-center  bg-black z-60 gap-32 "
        >
          <button
            className=" absolute top-4 right-4  bg-blackfogra_3 text-white text-xl self-end  rounded-md p-2"
            onClick={() => setIsMenu(false)}
          >
            <AiOutlineClose />{" "}
          </button>
          <ul className="flex flex-col items-center justify-center gap-10 ">
            <List style="mobile" isMenu={setIsMenu} />
          </ul>
        </motion.nav>
      )}

      {showTopButton && (
        <button
          className={`  fixed top-[92vh] right-4 lg:right-8  text-4xl sm:text-5xl  lg:text-6xl  text-crimson z-40 drop-shadow-lg   hover:text-lightgray `}
          onClick={scrollToTop}
        >
          <TbArrowMergeBoth />
        </button>
      )}

      {/* Desktop nav */}

      <div className="hidden lg:flex gap-20 items-center      ">
        <nav>
          <ul className="flex gap-12">
            <List style="desktop" isMenu={setIsMenu} />
          </ul>
        </nav>

        <a
          href="#contact"
          className="bg-secondary border-crimson border-solid  border hover:opacity-80  hover:bg-opacity-80 duration-300  text-center text-white  font-Tbutton  p-1.5 px-4  text-lg "
        >
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
