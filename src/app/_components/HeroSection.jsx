// components/HeroSection.js
"use client"
import img from '../../../public/hero-img.png';
import Image from 'next/image';
import { FaTools } from "react-icons/fa";
const HeroSection = () => {
    return (
      
      <div
        className="bg-white text-blu-800 text-center py-6 md:py-2 relative min-h-fit sm:min-h-[700px] md:min-h-[500px] w-full z-10 flex flex-col md:flex-row-reverse justify-center gap-6 items-center"
        style={{ backgroundImage: `url('/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
      >
        {/* Overlay */}
        <div className="absolute top-0 inset-0 bg-gradient-to-r from-white to-slate-50 opacity-90 z-0"></div> 
        <div className="relative z-10 flex flex-col items-center justify-center h-full pl-4 order-1 w-[100%] text-center md:ml-12 md:mr-6 md:min-w-[50%]  md:items-start md:text-left">
          <div className='mb-4 flex justify-between items-center'>
            <FaTools className="text-md text-cyan-500 mr-3" />
            <h1 className="text-md text-gray-800">Your Trusted Service Provider</h1>
          </div>
        <h1 className="text-4xl md:text6xl font-bold mb-4">Your Go-To <span className='text-cyan-500 uppercase'>Handyman</span> and <span className='text-cyan-500 uppercase'>Home Service</span> Company</h1>
        <p className="text-lg mb-6">At Home Services Co., we&apos;re dedicated to providing exceptional handyman services across the Cleveland area. From quick fixes to extensive home improvements, our expert team is committed to delivering reliable, customized solutions that meet all your needs.</p>
        <a href="/contact" className="hover:bg-white hover:text-gray-800 bg-gradient-to-r from-cyan-500 to-blue-900 text-white px-10 py-6 rounded-lg font-semibold">Get a Free Quote</a>
        </div>
        <div className='hidden md:inline sm:w-[60%] md:w-[40%]'>
        <Image src={img} alt="hero image" className='w-[100%] md:w-[80%] md:min-w-[600px] relative z-10 transition-transform ' />
        </div>
        
      </div>
      
    );
  };
  
  export default HeroSection;
  