import { homeImg1, homeImg10, homeImg11, homeImg6, homeImg7 } from '@/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  homeImg1, // Replace with your image paths
  homeImg6,
  homeImg10,
  homeImg11
];

const MobileImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Timer to auto-advance the carousel
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative lg:hidden w-full mx-auto">
      {/* Images */}
      <div className="overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          className="w-full h-[90vh] object-cover duration-700 transition-transform ease-in-out brightness-75"
        />
      </div>
    </div>
  );
};

export default MobileImageCarousel;
