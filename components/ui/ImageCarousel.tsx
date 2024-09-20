import { heroImg, heroImg2, heroImg3, heroImg4, homeImg1 } from "@/utils";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const images = [heroImg, heroImg2, heroImg4];

// const ImageCarousel: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useGSAP(() => {
//     gsap.fromTo( ".image", {
//       scale: 1,
//       rotate: 0,
//     }, {
//       scale: 2,
//       rotate: -25,
//       duration: 4,
//       scrub: 1,
//       ease: "power4.inOut",
//       onComplete: () => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }
//     });
//   });

//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     setCurrentIndex((prevIndex) =>
//   //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   //     );
      
//   //   }, 8000);

//   //   return () => clearInterval(timer);
//   // }, []);

//   return (
//     <div className="relative w-full hidden lg:block mx-auto">
//       <div className="overflow-hidden">
//         <Image
//           src={images[currentIndex]}
//           alt="Carousel Image"
//           className="w-full h-[90vh] image object-cover duration-700 transition-transform ease-in-out brightness-75"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;


// components/Carousel.tsx

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";

gsap.registerPlugin(Flip);

const images = [heroImg, heroImg2, heroImg3, heroImg4];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to go to the next image
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    animateSlide(nextIndex);
    setCurrentIndex(nextIndex);
  };

  // GSAP slide animation
  const animateSlide = (nextIndex: number) => {
    const currentImage = imageRefs.current[currentIndex];
    const nextImage = imageRefs.current[nextIndex];

    gsap.timeline()
      .fromTo(
        currentImage,
        { scale: 1,
          rotate: 0, },
        { scale: 2,
          rotate: -25,
          duration: 1,
          ease: "power4.inOut",
        }
      )
      .fromTo(
        nextImage,
        { scale: 2,
          rotate: 25,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
        },
        { scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          rotate: 0,
          duration: 0.3,
          ease: "power4.inOut", }, 0
      );
  };

  // Set up the auto-change interval
  useEffect(() => {
    intervalRef.current = setInterval(goToNextImage, 6000); // Auto-change every 4 seconds
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, goToNextImage]);

  return (
    <div className="relative w-full mx-auto hidden md:block">
      <div className="overflow-hidden w-full h-[90vh]">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => el && (imageRefs.current[index] = el)}
            className={`absolute inset-0 ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <Image
              src={img}
              alt={`Home Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;