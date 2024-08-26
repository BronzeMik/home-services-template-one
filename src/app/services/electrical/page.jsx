"use client";

"use client";

import ContactForm from "@/app/_components/ContactFormComponent";
import ServicesSideBar from "@/app/_components/ServicesSideBar";
import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function page() {
  const sidebarRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      const img = imgRef.current;
      const content = contentRef.current;

     

      if (sidebar) {
        const stickyOffset = sidebar.offsetTop;
        if (window.scrollY > stickyOffset) {
          sidebar.classList.add("fixed", "top-5", "z-0");
        } 
        if(window.scrollY <= img.offsetTop) {
          sidebar.classList.remove("fixed", "top-5", "z-0");
        }
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  const residentialServices = [
    "Lighting Installation and Upgrades",
    "Ceiling Fan Installation",
    "Electrical Panel Upgrades",
    "Home Rewiring",
    "Surge Protection",
    "Outdoor Lighting and Electrical",
    "Home Automation Systems",
    "EV Charging Station Installation",
    "Smoke Detector Installation and Maintenance",
    "Circuit Breaker Replacement",
    "Hot Tub and Spa Electrical Installation",
    "Backup Generator Installation",
    "Security System Installation",
    "Home Energy Audits",
  ];

  const commercialServices = [
    // Restaurant-specific services
    "Restaurant Lighting Design and Installation",
    "Commercial Kitchen Electrical Setup",
    "Outdoor and Parking Lot Lighting",
    "Electrical Code Inspections and Upgrades",
    "Energy Management Systems",
    "Commercial Generator Installation",
    "Point of Sale (POS) System Electrical Setup",
    "Refrigeration Unit Electrical Services",
    "HVAC System Electrical Services",
    "Emergency and Exit Lighting",
    "Fire Alarm System Installation",
    "Electrical Troubleshooting and Repair",

    // Laundry Mat-specific services
    "Industrial Washer and Dryer Electrical Setup",
    "Electrical Panel Installation and Upgrades",
    "Security Camera System Installation",
    "Backup Power Solutions",
    "Signage and Display Lighting",
  ];

  const propertyManagementServices = [
    "Routine Electrical Maintenance",
    "Electrical Safety Inspections",
    "Common Area Lighting Maintenance",
    "Smoke Detector Testing and Replacement",
    "Pool and Spa Electrical Services",
    "Intercom and Access Control Systems",
    "Elevator Electrical Maintenance",
    "Emergency Lighting and Generator Services",
    "Tenant Fit-Out and Electrical Upgrades",
    "Energy Efficiency Solutions",
    "HVAC and Boiler Electrical Maintenance",
    "Parking Garage Electrical Services",
    "Electrical Code Compliance Upgrades",
    "Landscape and Outdoor Lighting",
  ];

  return (
    <div className="w-full flex flex-col justify-center">

      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b-2 border-b-slate-100 mt-4">
        <div className="flex justify-start items-center font-bold py-3 ml-3">
          <a href="/">Home</a>
          <MdOutlineKeyboardArrowRight className="text-gray-800" />
          <a href="/services/electrical" className="text-blue-800">
            Electrical Service
          </a>
        </div>
      </div>

      {/* Side Bar */}
      {/* Side Bar */}
      <div className="grid grid-cols-8 my-6 gap-3">
        <div className="col-start-1 col-end-3 max-w-[20vw] ml-4" id="sidebar" ref={sidebarRef}>
          {/* Aside */}
          <ServicesSideBar
            residentialService={residentialServices}
            commercialService={commercialServices}
            propertyManagementService={propertyManagementServices}
          />
        </div>

        <div className="col-start-3 col-end-9 pr-3" ref={contentRef}>
          {/* content */}

          {/* Image */}
          <div className="w-full h-96 bg-cover bg-center bg-no-repeat bg-electrical"
          ref={imgRef}
          style={{ backgroundImage: `url('/electrician-services-img.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }}
          ></div>

          {/* Heading */}
          <div className="w-[80%]">
            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Electrical Services Tailored to Your Needs</h2>
            <p className="mb-16">
              At Home Services Co., we understand that clear and consistent communication is vital for the success of any project. From our dedicated office team to our skilled field technicians, we are committed to keeping our clients informed every step of the way. Our philosophy is simple: treat every client with the utmost care, quality, and integrity, regardless of the project size. We aim to build lasting relationships with each client, ensuring that they feel valued and heard.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Commitment to Timeliness and Efficiency</h2>
            <p className="mb-16">
            We know that your time is incredibly valuable, which is why we prioritize punctuality and meeting deadlines. Our trained technicians are dedicated to being on time and ready to work, so you never have to worry about delays. We respect your schedule and promise to provide efficient, reliable service that gets the job done right the first time. At Home Services Co., we believe that time is money, and we&apos;re committed to making sure you never waste a moment waiting on us.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Innovative Electrical Solutions for Every Project</h2>
            <p className="mb-16">
            Whether you&apos;re embarking on new construction or looking to remodel an existing space, Home Services Co. has the expertise to meet your electrical needs. We offer a range of services, from laying the electrical groundwork in new builds to updating and enhancing existing systems. Our team is equipped to handle every aspect of your project, ensuring safety, efficiency, and style.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Transformative Lighting Solutions</h2>
            <p className="mb-16">
            Our skilled electricians specialize in installing recessed lighting, adding a touch of elegance and modernity to any space. Whether you&apos;re updating an existing property or building from the ground up, we provide cost-effective and timely solutions that enhance the beauty and functionality of your home or business. We take pride in our ability to seamlessly integrate new lighting features while preserving the integrity of your current system.
            </p>

            <h2 className="text-2xl text-gray-700 font-bold uppercase my-5">Building Strong Relationships Through Excellence</h2>
            <p className="mb-16">
            At Home Services Co., our core values of honesty, reliability, and quality are reflected in everything we do. We believe in fostering strong relationships with our clients, employees, and the community. Our commitment to excellence has earned us a reputation for being a trustworthy and dependable partner for all your electrical needs. We stand out from other companies because of our dedication to building lasting partnerships based on trust, safety, and exceptional workmanship.
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-gray-700">Get a Free Quote</h2>
            <ContactForm
            formStyles={'w-[80%]'}
            />
          </div>
        </div>
        
      </div>
    
      
    </div>
  );
}

export default page;
