
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceImageCarouselProps {
  images: string[];
  title: string;
}

const ServiceImageCarousel: React.FC<ServiceImageCarouselProps> = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full h-full flex flex-col bg-[#E5E7EB] relative overflow-hidden">
      {/* Image */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-10">
        <button
          onClick={prev}
          className="p-1.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_#000] hover:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all"
        >
          <ChevronLeft size={16} className="text-black" />
        </button>

        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full border-2 border-black transition-all ${
                i === current ? 'bg-black w-4' : 'bg-white'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-1.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_#000] hover:bg-gray-100 active:shadow-none active:translate-y-[1px] transition-all"
        >
          <ChevronRight size={16} className="text-black" />
        </button>
      </div>

      {/* Badge */}
      <div className="absolute top-4 left-4 bg-white px-3 py-1.5 border-2 border-black rounded-full font-black text-[10px] shadow-[2px_2px_0px_#000] uppercase tracking-widest">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default ServiceImageCarousel;
