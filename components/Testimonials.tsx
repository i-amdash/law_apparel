"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { testimonials } from "@/utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animation";

const Testimonials = () => {
  useGSAP(() => {
    animateWithGsap("#testimonial_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".testimonial_text", {
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
    <section className="lg:px-24 px-8 py-12 ">
      <div className=" py-2">
        <h2
          className="text-slate-950 font-semibold text-4xl opacity-0 translate-y-20"
          id="testimonial_title"
        >
          Customer <span className="text-[#7B5D42]">Testimonials</span>
        </h2>
      </div>
      <div className=" py-2">
        <p className="text-[#cccaca] font-normal text-md testimonial_text opacity-0 translate-y-100">
          Kind words from satisfied clients
        </p>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
