import React from "react";
import AboutUsHeroSection from "../_components/AboutUsHeroComponent";
import img from "../../../public/about-us-page-img.png";
import CardComponent from "../_components/FeatureCardComponent";
import { FaClock, FaWallet, FaChartLine, FaReceipt } from "react-icons/fa";
import Image from "next/image";
import Newsletter from "../_components/NewsLetterComponent";

function page() {
  return (
    <div className="bg-blue-100 bg-opacity-5">
      <AboutUsHeroSection />
      <div className="flex flex-col items-center justify-center mx-auto py-12">
        <p className="px-3 text-left md:w-[70%] text-3xl md:text-4xl md:text-center pb-10">
          Welcome to <span className="text-cyan-500">Home Services Co.</span>,
          where we believe in delivering top-notch home solutions with a
          personal touch. Our mission is to provide reliable, professional, and
          high-quality services that make your home a better place.
        </p>
        <section 
        className="relative flex justify-center py-16 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute  inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-85"></div>
        <p className="text-white text-center relative z-40 w-[70%] text-xl font-bold">“Our success is built on a foundation of integrity, innovation, and unwavering commitment to excellence. We don&apos;t just deliver services; we deliver trust and quality, turning our clients&apos; visions into reality.”</p>
        </section>
        <h3 className="text-2xl font-bold mt-6 text-blue-900 md:text-3xl uppercase">
          Our Story
        </h3>
        <p className="text-justify text-lg px-3 md:w-[70%] pb-12 md:text-center">
          At Home Services Co., we started with a simple idea: to make home
          services more accessible and trustworthy. What began as a small team
          of dedicated professionals has grown into a company known for its
          commitment to excellence. Our team combines years of experience with a
          passion for service, ensuring every job is done right the first time.
        </p>
        <div className="flex flex-col md:flex-row gap-5 w-[90%] md:justify-between md:items-center">
          {/* image */}
          <div className="w-[80%]">
            <Image
              src={img}
              alt="Our Work"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* content */}
          <div>
            <h3 className="text-2xl font-bold mt-6 text-gray-800 uppercase">
              Our Values
            </h3>
            <ul className="list-disc pl-5">
              <li className="text-lg">
                <span className="text-blue-900 font-bold uppercase">Quality:</span> We
                believe in delivering the highest quality services to our
                customers. From start to finish, we strive for excellence in
                everything we do.
              </li>
              <li className="text-lg">
                <span className="text-blue-900 font-bold uppercase">Integrity:</span> We
                value honesty, transparency, and integrity in all our
                interactions. You can trust us to provide reliable, professional
                services every time.
              </li>
              <li className="text-lg">
                <span className="text-blue-900 font-bold uppercase">
                  Customer Service:
                </span>{" "}
                Our customers are our top priority. We go above and beyond to
                ensure your satisfaction, providing personalized solutions that
                meet your unique needs.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-6 text-gray-800 uppercase">
              Our Services
            </h3>
            <p>
              Home Services Co. offers a wide range of services to meet your
              home improvement needs. Whether you need a quick fix or a complete
              renovation, our team is here to help. Our services include:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg">Handyman Services</li>
              <li className="text-lg">Home Repair</li>
              <li className="text-lg">Remodeling</li>
              <li className="text-lg">Maintenance</li>
              <li className="text-lg">And more!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 px-4 mb-8">
              <CardComponent
                icon={<FaClock />}
                title="24/7 Availability"
                description="All our services are available at any time, with no extra charges for after-hours work."
              />
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-8">
              <CardComponent
                icon={<FaWallet />}
                title="Affordable Price"
                description="We offer competitive pricing with transparent rates. No hidden fees or surprise costs."
              />
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-8">
              <CardComponent
                icon={<FaChartLine />}
                title="Process Technology"
                description="Utilizing the latest technology to ensure efficient and accurate services in all our processes."
              />
            </div>
            <div className="w-full lg:w-1/4 px-4 mb-8">
              <CardComponent
                icon={<FaReceipt />}
                title="Free Estimation"
                description="Get a no-obligation quote by emailing us your details or giving us a call. We’ll respond the same day."
              />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default page;
