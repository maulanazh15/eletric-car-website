'use client';
import { useState } from 'react';
import { Clock, Menu, Thermometer, X, Zap } from "react-feather";
import Image from 'next/image';
import CarCarousel from '@/components/CarCarousel';
import { carData1 } from '@/data/carData';
import CarCard from '@/components/CarCard';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

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
        <h1 className='font-semibold text-2xl'>Choose The Best Car</h1>
        <h3 className='mt-[26px] font-semibold text-base'>Porsche Mission E</h3>
        <div className='flex items-center mt-3 space-x-1'>
          <Zap fill='#4177DC' strokeWidth={0} />
          <p className='font-normal text-sm'>Electric Car</p>
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
      <section className='flex flex-col items-center my-14'>
        <h2 className='text-center w-3/4 font-semibold mb-16 text-lg'>Choose Your Electric Car
          Of The Porsche Brand</h2>

        <CarCarousel className='w-full' />
      </section>

      <section className='pt-20 flex flex-col items-center justify-center pb-14 overflow-hidden'>
        <h2 className='font-semibold text-xl mb-20'>More Features</h2>
        <div className="relative flex flex-col items-center justify-center gap-10 z-10">
          {/* Map Image (Background) */}
          <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 -z-10 w-[200%] sm:w-[220%] md:w-[240%] lg:w-[260%] rotate-6 h-full">
            <Image
              src={'/Map.png'}
              alt="map"
              width={1000}  // Adjust this to control initial width on small screens
              height={1000} // Adjust this to control initial height on small screens
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 200vw, (max-width: 1024px) 190vw, (max-width: 1280px) 180vw, 160vw"
            />
          </div>

          {/* Car Image */}
          <div className="relative z-10 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <Image
              src={'/featured-car.png'}
              alt="car"
              width={600} // Adjust width for better scaling across breakpoints
              height={1200} // Adjust height for better scaling across breakpoints
              className="object-contain w-full h-auto"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
            />
          </div>

          {/* Stats Divs */}
          <div className="absolute top-0 flex flex-col justify-between space-y-10 z-20 mt-4 w-[150%]">
            {/* Stat 1 */}
            <div className='flex justify-start'>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg h-[84px] w-32 text-white flex flex-col justify-center items-center p-2">
                <h3 className="text-base font-semibold">800v</h3>
                <p className="font-light text-xs text-center">Turbo <br /> Charging</p>
              </div>

            </div>

            {/* Stat 2 */}
            <div className='flex justify-end'>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg h-[84px] w-32 text-white flex flex-col justify-center items-center p-2">
                <h3 className="text-base font-semibold">350</h3>
                <p className="font-light text-xs text-center">Km <br /> Range</p>
              </div>

            </div>

            {/* Stat 3 */}
            <div className='flex justify-start'>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg h-[84px] w-32 text-white flex flex-col justify-center items-center p-2">
                <h3 className="text-base font-semibold">480</h3>
                <p className="font-light text-xs text-center">Km <br /> Travel</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 flex flex-col items-center mb-12'>
        <h2 className='text-xl font-semibold mb-14'>Featured Luxury Cars</h2>
        <div className='flex items-center justify-between gap-3'>
          <div className='bg-slate-800 h-12 w-12 flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-500 text-light'>
            All
          </div>
          <div className='hover:bg-[#4177DC] bg-slate-800 h-12 w-12 flex items-center justify-center rounded-md cursor-pointer'>
            <Image src={'/logo3.png'} width={25} height={25} alt='car-logo' />
          </div>
          <div className='hover:bg-[#4177DC] bg-slate-800 h-12 w-12 flex items-center justify-center rounded-md cursor-pointer'>
            <Image src={'/logo2.png'} width={25} height={25} alt='car-logo' />
          </div>
          <div className='hover:bg-[#4177DC] bg-slate-800 h-12 w-12 flex items-center justify-center rounded-md cursor-pointer'>
            <Image src={'/logo1.png'} width={25} height={25} alt='car-logo' />
          </div>

        </div>
        <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {carData1.map((car, index) => {
            return (
              <CarCard
                key={index}
                brand={car.brand}
                model={car.model}
                price={car.price}
                imageSrc={car.imageSrc}
                top_speed={car.top_speed}
                time={car.time}
              />
            )
          })}
        </div>
      </section>
      <section className='relative mt-14 flex flex-col items-center pt-14 overflow-hidden gap-3 pb-10 lg:flex-row'>
        <div className='flex flex-col lg:items-start items-center'>
          <h2 className='font-semibold text-xl w-3/4 mb-8 text-center lg:text-left'>
            Do You Want To Receive Special Offers?
          </h2>
          <p className='lg:text-left text-center font-light text-base'>
            Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
          </p>
          <button className="mt-8 bg-[#4177DC] px-8 py-4 rounded-md">
            Subscribe Now
          </button>
        </div>

        <div className='mt-16'>
          <div className='flex items-center justify-center'>
            <Image src={'/subscribe 1.png'} alt='car' width={500} height={500} />

          </div>
        </div>

      </section>
      <section className='mt-14 flex items-center justify-center py-14'>
        <div className='grid grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:items-center gap-11 lg:w-full'>
          {new Array(6).fill(null).map((_, index) => (
            <Image key={index} src={`/logo/logo${index + 1}.png`} alt={`logo ${index + 1}`} width={40} height={40} />
          ))}
        </div>
      </section>
      <footer className='py-16 flex flex-col gap-10 lg:space-x-10 lg:flex-row lg:justify-between lg:w-full'>
        <div className='lg:w-[23%]'>
          <div className='flex items-center gap-1'>
            <Image src={'/ri_steering-fill.png'} width={25} height={25} alt='steering-logo' />
            <h2 className='font-medium text-xl'>Elecar</h2>
          </div>
          <p className='mt-6 font-light text-sm'>We offer the best electric cars of the most recognized brands in the world.</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-base mb-6'>Company</h3>
          <ul className='space-y-2 font-light text-base'>
            <li>About</li>
            <li>Cars</li>
            <li>History</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='font-semibold text-base mb-6'>Information</h3>
          <ul className='space-y-2 font-light text-base'>
            <li>Request a quote</li>
            <li>Find a dealer</li>
            <li>Contact us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='font-semibold text-base mb-6'>Follow us</h3>
          <div className='flex items-center gap-6'>
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </footer>
    </main>
  );
}
