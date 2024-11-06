'use client';
import { useState } from 'react';
import { Clock, Menu, Thermometer, X, Zap, ZapOff } from "react-feather";
import Image from 'next/image';
import CarCard from '@/components/CarCard';
import { carData } from '@/data/carData';
import CarCarousel from '@/components/CarCarousel';

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <main className="relative h-screen sm:mx-32 p-6">
      <header className="flex items-center justify-between">
        <div className='flex items-center gap-1'>
          <Image src={'/ri_steering-fill.png'} width={20} height={20} alt='steering-logo' className='flex-shrink-0' />
          <h2 className='font-medium text-[16px]'>Elecar</h2>
        </div>

        {/* Menu button only visible on mobile */}
        <Menu onClick={toggleNav} className="cursor-pointer md:hidden" />

        {/* Nav list always visible on desktop, hidden on mobile */}
        <nav className="hidden md:flex gap-10">
          <ul className="flex items-center gap-10 text-[16px] font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Popular</li>
            <li>Featured</li>
          </ul>
        </nav>
      </header>

      {/* Mobile navigation overlay */}
      {isNavVisible && (
        <nav className="absolute top-0 left-0 w-full h-full bg-white/30 backdrop-blur-md flex justify-center items-center">
          <button onClick={toggleNav} className="absolute top-5 right-5 text-white">
            <X size={24} />
          </button>
          <ul className="flex flex-col items-center gap-10 text-white text-lg font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Popular</li>
            <li>Featured</li>
          </ul>
        </nav>
      )}

      <section className='mt-[133px] flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-[23px]'>Choose The Best Car</h1>
        <h3 className='mt-[26px] font-semibold text-[24px]'>Porsche Mission E</h3>
        <div className='flex items-center mt-3 space-x-1'>
          <Zap fill='#4177DC' strokeWidth={0} />
          <p className='font-normal text-[13px]'>Electric Car</p>
        </div>
        <Image src={'/home 1.png'} width={280} height={164} alt='car' className='mt-20' />
        <div className='flex mt-[40px] justify-center space-x-10 items-center w-fit'>
          <div className='flex flex-col items-center'>
            <div className='flex bg-slate-500 bg-opacity-50 rounded-full h-6 w-6 items-center justify-center'>
              <Thermometer size={10} />
            </div>
            <p className='font-medium text-[20px] mt-2'>24°</p>
            <p className='font-light uppercase text-[10px]'>Temperature</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex bg-slate-500 bg-opacity-50 rounded-full h-6 w-6 items-center justify-center'>
              <Clock size={10} />
            </div>
            <p className='font-medium text-[20px] mt-2'>873</p>
            <p className='font-light uppercase text-[10px]'>Mileage</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex bg-slate-500 bg-opacity-50 rounded-full h-6 w-6 items-center justify-center'>
              <Zap size={10} />
            </div>
            <p className='font-medium text-[20px] mt-2'>94%</p>
            <p className='font-light uppercase text-[10px]'>battery</p>
          </div>
        </div>
        <div className='mt-12 mx-auto flex items-center'>
          <div className='border border-green-600 rounded-full h-24 w-24 flex items-center justify-center'>
            <div className='flex items-center justify-center border border-green-300 w-20 h-20 rounded-full'>
              Start
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-8 md:flex sm:gap-20 sm:mx-auto md:max-w-6xl">
        <div className="relative w-full h-auto">
          <Image
            src={'/about 1(1).png'}
            alt="car-dashboard"
            layout="responsive"
            width={312}
            height={210}
            className="object-cover w-full h-auto"
          />
          <div className="absolute bottom-[-10px] right-0 bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg transform translate-y-1/4 flex flex-col items-center justify-center w-44 h-24">
            <h3 className="font-semibold text-white">2,500+</h3>
            <p className="text-white text-sm">Supercharges placed along popular routes</p>
          </div>
        </div>

        <div className="mt-[50px]">
          <h2 className="font-semibold text-lg">Machines With <br /> Future Technology</h2>
          <p className="mt-5 font-light text-[15px]">
            See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.
          </p>
          <button className="mt-8 bg-[#4177DC] px-8 py-4 rounded-md">
            Know more
          </button>
        </div>
      </section>
      <section className='mt-14 flex flex-col items-center'>
          <h2 className='text-center w-3/4 font-semibold mb-16'>Choose Your Electric Car 
          Of The Porsche Brand</h2>
          
          <CarCarousel className='w-full'/>
      </section>
    </main>
  );
}
