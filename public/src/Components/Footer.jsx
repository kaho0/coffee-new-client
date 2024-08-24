import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import backgroundImage from "../../more/11.png";
import logoImage from "../../more/logo1.png";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center py-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <img
            src={logoImage}
            alt="Logo"
            className="mx-auto md:mx-0 mb-2 w-24 h-auto"
          />
          <h2 className="text-2xl font-ranch text-borderCol mb-2">
            Espresso Emporium
          </h2>
          <p className="text-sm text-inputText font-raleway">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex justify-center md:justify-start mt-2 space-x-2">
            <FaFacebookF className="text-inputText text-xl cursor-pointer hover:text-buttonBg" />
            <FaTwitter className="text-inputText text-xl cursor-pointer hover:text-buttonBg" />
            <FaInstagram className="text-inputText text-xl cursor-pointer hover:text-buttonBg" />
            <FaLinkedinIn className="text-inputText text-xl cursor-pointer hover:text-buttonBg" />
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-2xl font-ranch text-borderCol mb-2">
            Connect with Us
          </h3>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="block w-full p-2 mb-2 bg-formBg border border-borderCol rounded text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full p-2 mb-2 bg-formBg border border-borderCol rounded text-sm"
            />
            <textarea
              placeholder="Message"
              className="block w-full p-2 mb-2 bg-formBg border border-borderCol rounded text-sm"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-buttonBg text-white py-2 px-4 rounded hover:bg-borderCol transition-colors duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-inputText font-raleway mt-4 text-xs">
        &copy; {new Date().getFullYear()} Espresso Emporium | All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
