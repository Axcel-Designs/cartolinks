'use client'
import { carouselData } from '@/utils/data';
import Image from 'next/image';
import { useEffect, useState } from 'react'

export default function Hero() {
  const [crrIndex, setCrrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrrIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handeClick = (index: number) => {
    setCrrIndex(index);
  };
  return (
    <div>
      <section className="px-4">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${crrIndex * 100}%)` }}>
            {carouselData.map(({ image, buttonText, desc, subtitle, title }, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <Image src={image} alt={title} className=" w-150 h-auto object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-black/95 p-8 sm:p-12 flex flex-col justify-end">
                  <div className=" inset-0 flex flex-col ">
                    {/* <div> */}
                    <p className='text-2xl sm:text-3xl font-bold text-center my-20'>{title}</p>
                    <span className="text font-semibold text-gray-300 mb-2">{subtitle}</span>
                    <p className="text-gray-200 text-sm sm:text-base max-w-lg mb-6">{desc}</p>
                  </div>
                  {buttonText && (
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded-full text-sm self-start hover:bg-gray-200 transition-colors">
                      {buttonText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex gap-2 w-full justify-center my-4">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${crrIndex === index ? ' bg-gray-900' : ''}`}
            onClick={() => handeClick(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}