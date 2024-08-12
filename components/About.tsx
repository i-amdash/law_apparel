"use client";
import React from "react";
import { aboutImg } from "@/utils";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";

const About = () => {
  useGSAP(() => {
    animateWithGsap("#about_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".about_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:w-1/2">
        <Image src={aboutImg} className="w-full" alt="about-img" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center py-12 items-start px-24 bg-gradient-to-br from-slate-950 to-[#7B5D42]">
        <div className="flex justify-center gap-x-2 items-center">
          <HiStar height={180} width={180} color="#F1CF64" />
          <div className="w-32 h-[0.2px] bg-white"></div>
        </div>
        <h2
          className="text-4xl font-bold text-white py-8 opacity-0 translate-y-20"
          id="about_title"
        >
          About <span className="text-[#7B5D42]">Us</span>
        </h2>
        <p className="text-md text-justify text-white about_text feature-text">
          O & B Apparel brings you exquisteness,luxury and affordability in
          varieties. We only look forward to satisfying our customers in the
          most beautiful manner.Our product helps to bring the best in you.{" "}
          <br /> <br />
          <span className="py-4 about_text">
            For all the sacrifices, self-deprivations, disciplines, devotion and
            perseverance that can never be measured or quantified.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
