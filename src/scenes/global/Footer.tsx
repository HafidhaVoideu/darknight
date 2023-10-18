import { FaFacebookSquare, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="p-6">
      <div className=" flex gap-4 items-center justify-center text-crimson text-2xl mb-6">
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaTelegramPlane />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebookSquare />
        </a>
      </div>
      <p className=" text-center m-auto">
        {" "}
        &#169; All rights reserved to Darkknight Labs 2023
      </p>
    </footer>
  );
};

export default Footer;
