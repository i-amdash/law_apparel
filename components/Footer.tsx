"use client";
import React from "react";
import {
  FaLocationArrow,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Button from "./ui/Button";
import AltButton from "./ui/AltButton";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";

const Footer = () => {
  useGSAP(() => {
    animateWithGsap("#footer_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".footer_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 3,
    });
    animateWithGsap(".p_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 4,
    });
  }, []);

  return (
    <footer
      className="w-full bg-slate-950  lg:px-24 px-8 pt-20 pb-10"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1
          className="text-4xl text-white font-semibold text-center lg:max-w-[45vw] opacity-0 translate-y-20"
          id="footer_title"
        >
          Ready to take the first step towards <br />
          <span className="text-[#7B5D42]">legal success?</span>
        </h1>
        <p className="text-[#cccaca] text-sm md:mt-10 my-5 text-center footer_text opacity-0 translate-y-100">
          We are here to be your dedicated advocates in pursuit of a legal
          career.
        </p>
        <a
          href="mailto:onbapparels@gmail.com"
          className="footer_text opacity-0 translate-y-100"
        >
          <AltButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal py-8 text-center md:py-0 text-white font-light footer_text opacity-0 translate-y-100">
          Copyright © 2024 Doyin Ashimi
        </p>

        <div className="flex items-center text-white md:gap-3 gap-6 footer_text opacity-0 translate-y-100">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  bg-[conic-gradient(from_90deg_at_50%_50%,#72553C_0%,#1C1108_50%,#72553C_100%)] hover:bg-white hover:text-slate-950 rounded-lg border border-black-300"
            >
              {info.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const socialMedia = [
  {
    id: 1,
    icon: <FaWhatsapp />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
  {
    id: 4,
    icon: <FaFacebook />,
  },
];
