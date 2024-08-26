// components/HeroSection.js
"use client"
import img from '../../../public/hero-img.png';
import Image from 'next/image';
import { FaTools } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const AboutUsHeroSection = () => {
    return (
      
      <div
        className="bg-white text-blu-800 text-center py-2 md:py-2 relative min-h-fit sm:min-h-[400px] md:min-h-[300px] w-full z-10 flex flex-col md:flex-row-reverse justify-center gap-6 items-center"
        style={{ backgroundImage: `url('/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
      >
        {/* Overlay */}
        <div className="absolute top-0 inset-0 bg-gradient-to-r from-white to-slate-50 opacity-90 z-0"></div> 
        <div className="relative z-10 flex flex-col items-center justify-center h-full pl-4 w-[90%] text-center md:ml-12 md:mr-6 md:min-w-[50%]">
          <div className='flex justify-around items-center mb-10 font-bold'>
            <a href='/'>Home</a>
            <MdOutlineKeyboardArrowRight className="text-gray-800" />
            <a href='/about' className='text-blue-800'>About Us</a>
          </div>
          <div className='mb-4 flex justify-between items-center'>
            <FaTools className="text-md text-cyan-500 mr-3" />
            <h1 className="text-md text-gray-800">Home Services Co.</h1>
          </div>
        <h1 className="text-2xl md:w-[40%] md:text6xl font-bold mb-4">About <span className='text-cyan-500 uppercase'>Home Services Co.</span></h1>
        
        <p className="text-lg mb-6">At Home Services Co., we&apos;re dedicated to providing exceptional handyman services across the Cleveland area. From quick fixes to extensive home improvements, our expert team is committed to delivering reliable, customized solutions that meet all your needs.</p>
        <a href="/contact" className="hover:bg-white hover:text-gray-800 bg-gradient-to-r from-cyan-500 to-blue-900 text-white px-10 py-6 rounded-lg font-semibold">Get a Free Quote</a>
        </div>
        
      </div>
      
    );
  };
  
  export default AboutUsHeroSection;
  