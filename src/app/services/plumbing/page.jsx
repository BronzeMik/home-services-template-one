"use client";


import ContactForm from "@/app/_components/ContactFormComponent";
import ServicesSideBar from "@/app/_components/ServicesSideBar";
import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  const sidebarRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

 
  
  
  const residentialPlumbingServices = [
    "Water Heater Installation and Repair",
    "Drain Cleaning and Unclogging",
    "Toilet Repair and Replacement",
    "Leaky Faucet Repair",
    "Garbage Disposal Repair and Installation",
    "Pipe Leak Detection and Repair",
    "Shower and Bathtub Installation",
    "Sump Pump Installation and Repair",
    "Water Softener Installation",
    "Sewer Line Repair and Replacement",
    "Fixture Installation and Repair",
    "Gas Line Installation and Repair",
    "Outdoor Faucet Installation and Repair",
    "Water Pressure Adjustment",
    "Emergency Plumbing Services"
  ];
  

  const commercialPlumbingServices = [
    "Commercial Water Heater Installation and Repair",
    "Backflow Prevention Testing and Installation",
    "Grease Trap Installation and Maintenance",
    "Drain and Sewer Line Cleaning",
    "Commercial Pipe Repair and Replacement",
    "Bathroom and Kitchen Fixture Installation",
    "Boiler System Installation and Maintenance",
    "Hydro-Jetting Services",
    "Water Main Installation and Repair",
    "Gas Line Installation and Maintenance",
    "Commercial Leak Detection Services",
    "Industrial Plumbing System Maintenance",
    "Commercial Sump Pump Installation and Repair",
    "Storm Drain Installation and Maintenance",
    "Emergency Commercial Plumbing Services"
  ];
  

  const propertyManagementPlumbingServices = [
    "Routine Plumbing Maintenance",
    "24/7 Emergency Plumbing Services",
    "Plumbing System Inspections",
    "Pipe and Sewer Line Repair",
    "Water Heater Maintenance and Repair",
    "Fixture Replacement and Repair",
    "Water Pressure Testing and Adjustment",
    "Sewer Camera Inspections",
    "Leak Detection and Repair",
    "Drain Cleaning Services",
    "Tenant Plumbing Issue Resolution",
    "Commercial Fixture Upgrades",
    "Preventative Plumbing Maintenance Programs",
    "Backflow Prevention Device Installation and Testing",
    "Boiler and Water Heater System Maintenance"
  ];
  

  return (
    <div className="w-full flex flex-col justify-center">

      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b-2 border-b-slate-100 mt-4">
        <div className="flex justify-start items-center font-bold py-3 ml-3">
          <a href="/">Home</a>
          <MdOutlineKeyboardArrowRight className="text-gray-800" />
          <a href="/services/plumbing" className="text-blue-800">
            Plumbing Service
          </a>
        </div>
      </div>

      {/* Side Bar */}
      {/* Side Bar */}
      <div className="flex flex-col mx-3 md:grid md:grid-cols-8 my-6 gap-3">
        <div className="hidden md:block md:col-start-1 md:col-end-3 max-w-[20vw] ml-4" id="sidebar" ref={sidebarRef}>
          {/* Aside */}
          <ServicesSideBar
            residentialService={residentialPlumbingServices}
            commercialService={commercialPlumbingServices}
            propertyManagementService={propertyManagementPlumbingServices}
            sideBarTitle='Plumbing'
            serviceType='plumbing'
          />
        </div>

        <div className="w-full md:col-start-3 md:col-end-9  pr-3" ref={contentRef}>
          {/* content */}

          {/* Image */}
          <div className="w-full h-96 bg-cover bg-center bg-no-repeat bg-plumbing"
          ref={imgRef}
          style={{ backgroundImage: `url('/plumber-services-img.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
          ></div>

          {/* Heading */}
          <div className="w-full md:w-[80%]">
            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">plumbing Services Tailored to Your Needs</h2>
            <p className="mb-16">
              At Home Services Co., we understand that clear and consistent communication is vital for the success of any project. From our dedicated office team to our skilled field technicians, we are committed to keeping our clients informed every step of the way. Our philosophy is simple: treat every client with the utmost care, quality, and integrity, regardless of the project size. We aim to build lasting relationships with each client, ensuring that they feel valued and heard.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Commitment to Timeliness and Efficiency</h2>
            <p className="mb-16">
            We know that your time is incredibly valuable, which is why we prioritize punctuality and meeting deadlines. Our trained technicians are dedicated to being on time and ready to work, so you never have to worry about delays. We respect your schedule and promise to provide efficient, reliable service that gets the job done right the first time. At Home Services Co., we believe that time is money, and we&apos;re committed to making sure you never waste a moment waiting on us.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Innovative plumbing Solutions for Every Project</h2>
            <p className="mb-16">
            Whether you&apos;re embarking on new construction or looking to remodel an existing space, Home Services Co. has the expertise to meet your plumbing needs. We offer a range of services, from laying the plumbing groundwork in new builds to updating and enhancing existing systems. Our team is equipped to handle every aspect of your project, ensuring safety, efficiency, and style.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Transformative Lighting Solutions</h2>
            <p className="mb-16">
            Our skilled electricians specialize in installing recessed lighting, adding a touch of elegance and modernity to any space. Whether you&apos;re updating an existing property or building from the ground up, we provide cost-effective and timely solutions that enhance the beauty and functionality of your home or business. We take pride in our ability to seamlessly integrate new lighting features while preserving the integrity of your current system.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Building Strong Relationships Through Excellence</h2>
            <p className="mb-16">
            At Home Services Co., our core values of honesty, reliability, and quality are reflected in everything we do. We believe in fostering strong relationships with our clients, employees, and the community. Our commitment to excellence has earned us a reputation for being a trustworthy and dependable partner for all your plumbing needs. We stand out from other companies because of our dedication to building lasting partnerships based on trust, safety, and exceptional workmanship.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full flex flex-col items-start">
            <h2 className="text-center text-3xl font-bold text-gray-700">Get a Free Quote</h2>
            <ContactForm
            formStyles={'w-[100%]'}
            />
          </div>
        </div>
        
      </div>
    
      
    </div>
  );
}

export default Page;
