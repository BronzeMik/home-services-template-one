import { FaCheckCircle } from 'react-icons/fa';
import img from '../../../public/why-choose-us-section-img.png';
import Image from 'next/image';
const WhyChooseUs = () => {
  return (
    <section className="py-16">
      {/* Centered Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-900 inline-block">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-2 text-3xl md:text-5xl px-3 md:px-0">Discover the benefits of working with us</p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image 
            src={img}  
            alt="Why Choose Us" 
            className="w-full h-auto"
          />
        </div>

        {/* Right: Card with Icon Bullet Points */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-500">Our Service Features</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-500 mr-2" />
              <p className="text-gray-700">Expert Technicians</p>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-500 mr-2" />
              <p className="text-gray-700">Affordable Pricing</p>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-500 mr-2" />
              <p className="text-gray-700">Reliable and Timely Service</p>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-500 mr-2" />
              <p className="text-gray-700">Comprehensive Solutions</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
