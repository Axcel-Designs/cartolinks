'use client'
import { carouselData } from '@/utils/data';
import React, { useEffect, useState } from 'react'

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index:number) => {
    setCurrentIndex(index);
  };
  return (
    <section className="mx-auto px-4">
      <div>Hero</div>
      <div></div>
    </section>
  )
}