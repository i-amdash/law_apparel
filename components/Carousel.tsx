import React from 'react'
import Image from 'next/image'
import { InfiniteCarousel } from './ui/InfiniteCarousel';
import { carousel } from '@/utils';

const Carousel = () => {
  return (
    <div
          className="h-[10vh] flex antialiased bg-slate-900 items-center justify-center relative overflow-hidden"
        >
          <InfiniteCarousel
            items={carousel}
            direction="left"
            speed="slow"
          />
        </div>
  );
}

export default Carousel