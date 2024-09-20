"use client";
import Image from "next/image";
import React from "react";
import { resultImg, services, starImg, truckImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import { cn } from "@/lib/utils";

const Services = () => {
  useGSAP(() => {
    animateWithGsap("#services_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(
      ".g_grow2",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(
      ".g_grow3",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".service_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    // animateWithGsap(".service_text2", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 1,
    // });
    // animateWithGsap(".service_text3", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 1,
    // });
    animateWithGsap(".service_title", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 2,
    });
    // animateWithGsap(".service_desc_text", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 2,
    // });
    // animateWithGsap(".service_desc_text2", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 2,
    // });
    // animateWithGsap(".service_desc_text3", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 2,
    // });
  }, []);

  return (
    <div className="bg-white text-slate-950 p-8 flex flex-col justify-center items-center">
      <div className="w-full">
        <h1
          className="font-bold text-4xl text-center py-8 text-slate-950 opacity-0 translate-y-20"
          id="services_title"
        >
          Why Choose Us for your <br />
          <span className="text-[#7B5D42]">Legal Needs?</span>
        </h1>
        <p className="font-normal text-sm text-[#cccaca] text-center service_title translate-y-[100px] opacity-0">
          Our incredible track record in the past <br />
          speaks highly for us, making us <br />
          the best vendors to get your <br />
          apparels from.
        </p>
      </div>
      <div className="w-full">
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24 px-8">
        <ServiceCard
          items={services}
        />
      </div>
      </div>
    </div>
  );
};

export default Services;

const ServiceCard = ({
  items
}: {
  items: {
  image: string;
  title: string;
  description: string;
  className: string;
  secondClassName: string;
  }[];
}) => {
  return (
      <>
      {items.map((item, id) => (
    // eslint-disable-next-line react/jsx-key
    <div className={cn("hover:scale-105 transition-all bg-contain bg-no-repeat bg-center scale-110 lg:scale-150 opacity-0 h-[22rem] ease-in-out rounded-2xl w-full", item.className)}
    style={{ backgroundImage: `url(${item.image})`}}
    >
          {/* <div className="flex justify-center">
          <Image
            src={items.image}
            className="w-40 h-40 g_grow feature-video"
            width={40}
            height={40}
            alt="delivery"
          />
        </div>
  
        <div className="pt-16 pb-4">
          <h2
            className={cn(
              "font-semibold text-xl text-justify text-slate-950  feature-text",
              items.secondClassName
            )}
          >
            {items.title}
          </h2>
          <p
            className={cn(
              "font-normal text-md text-justify text-[#cccaca] py-2  feature-text",
              items.className
            )}
          >
            {items.description}
          </p>
        </div> */}
      
    </div>
        ))}
        </>
  );
};
