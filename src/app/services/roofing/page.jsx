"use client";


import ContactForm from "@/app/_components/ContactFormComponent";
import ServicesSideBar from "@/app/_components/ServicesSideBar";
import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  const sidebarRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

 
  
  
  const residentialRoofingServices = [
    "Roof Installation and Replacement",
    "Roof Inspection and Maintenance",
    "Roof Repair for Leaks and Damage",
    "Shingle Roof Installation and Repair",
    "Tile Roof Installation and Repair",
    "Metal Roof Installation and Repair",
    "Slate Roof Installation and Repair",
    "Flat Roof Installation and Repair",
    "Gutter Installation and Cleaning",
    "Skylight Installation and Repair",
    "Roof Ventilation Solutions",
    "Attic Insulation and Venting",
    "Emergency Roof Repair",
    "Storm Damage Roof Repair",
    "Roof Moss and Algae Removal"
  ];
  
  

  const commercialRoofingServices = [
    "Commercial Roof Installation and Replacement",
    "Flat Roof Installation and Repair",
    "Metal Roof Installation and Repair",
    "Built-Up Roofing (BUR) Systems",
    "Modified Bitumen Roofing",
    "TPO and PVC Roofing Systems",
    "Roof Coating Systems",
    "Green Roofing Solutions",
    "Commercial Roof Inspection and Maintenance",
    "Commercial Roof Leak Repair",
    "Gutter and Downspout Installation",
    "Skylight Installation and Repair",
    "Roof Waterproofing",
    "Emergency Roof Repair Services",
    "Solar Roofing Installation"
  ];
  
  

  const propertyManagementRoofingServices = [
    "Routine Roof Maintenance and Inspection",
    "Roof Leak Detection and Repair",
    "Roof Replacement and Installation",
    "Gutter Cleaning and Maintenance",
    "Roof Moss and Algae Treatment",
    "Storm Damage Assessment and Repair",
    "Shingle and Tile Replacement",
    "Flat Roof Repair and Maintenance",
    "Chimney Flashing Repair",
    "Vent Pipe and Skylight Sealing",
    "Attic Insulation and Ventilation Maintenance",
    "Emergency Roofing Repair Services",
    "Preventative Roof Maintenance Programs",
    "Roof Snow and Ice Removal",
    "Roof Warranty and Insurance Claims Assistance"
  ];
  
  

  return (
    <div className="w-full flex flex-col justify-center">

      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b-2 border-b-slate-100 mt-4">
        <div className="flex justify-start items-center font-bold py-3 ml-3">
          <a href="/">Home</a>
          <MdOutlineKeyboardArrowRight className="text-gray-800" />
          <a href="/services/roofing" className="text-blue-800">
            Roofing Service
          </a>
        </div>
      </div>

      {/* Side Bar */}
      {/* Side Bar */}
      <div className="flex flex-col mx-3 md:grid md:grid-cols-8 my-6 gap-3">
        <div className="hidden md:block md:col-start-1 md:col-end-3 max-w-[20vw] ml-4" id="sidebar" ref={sidebarRef}>
          {/* Aside */}
          <ServicesSideBar
            residentialService={residentialRoofingServices}
            commercialService={commercialRoofingServices}
            propertyManagementService={propertyManagementRoofingServices}
            serviceType='roofing'
            sideBarTitle='Roofiing'
          />
        </div>

        <div className="w-full md:col-start-3 md:col-end-9  pr-3" ref={contentRef}>
          {/* content */}

          {/* Image */}
          <div className="w-full h-96 bg-cover bg-center bg-no-repeat bg-roofing"
          ref={imgRef}
          style={{ backgroundImage: `url('/roofer-services-img.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
          ></div>

          {/* Heading */}
          <div className="w-full md:w-[80%]">
            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">roofing Services Tailored to Your Needs</h2>
            <p className="mb-16">
              At Home Services Co., we understand that clear and consistent communication is vital for the success of any project. From our dedicated office team to our skilled field technicians, we are committed to keeping our clients informed every step of the way. Our philosophy is simple: treat every client with the utmost care, quality, and integrity, regardless of the project size. We aim to build lasting relationships with each client, ensuring that they feel valued and heard.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Commitment to Timeliness and Efficiency</h2>
            <p className="mb-16">
            We know that your time is incredibly valuable, which is why we prioritize punctuality and meeting deadlines. Our trained technicians are dedicated to being on time and ready to work, so you never have to worry about delays. We respect your schedule and promise to provide efficient, reliable service that gets the job done right the first time. At Home Services Co., we believe that time is money, and we&apos;re committed to making sure you never waste a moment waiting on us.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Innovative roofing Solutions for Every Project</h2>
            <p className="mb-16">
            Whether you&apos;re embarking on new construction or looking to remodel an existing space, Home Services Co. has the expertise to meet your roofing needs. We offer a range of services, from laying the roofing groundwork in new builds to updating and enhancing existing systems. Our team is equipped to handle every aspect of your project, ensuring safety, efficiency, and style.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Transformative Lighting Solutions</h2>
            <p className="mb-16">
            Our skilled electricians specialize in installing recessed lighting, adding a touch of elegance and modernity to any space. Whether you&apos;re updating an existing property or building from the ground up, we provide cost-effective and timely solutions that enhance the beauty and functionality of your home or business. We take pride in our ability to seamlessly integrate new lighting features while preserving the integrity of your current system.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Building Strong Relationships Through Excellence</h2>
            <p className="mb-16">
            At Home Services Co., our core values of honesty, reliability, and quality are reflected in everything we do. We believe in fostering strong relationships with our clients, employees, and the community. Our commitment to excellence has earned us a reputation for being a trustworthy and dependable partner for all your roofing needs. We stand out from other companies because of our dedication to building lasting partnerships based on trust, safety, and exceptional workmanship.
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
