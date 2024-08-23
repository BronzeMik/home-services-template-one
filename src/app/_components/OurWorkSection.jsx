import Image from 'next/image';

const OurWork = () => {
    return (
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }} // Replace with your background image path
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-900 opacity-85"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-12">Our Work</h2>
          
          {/* Work Items */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Work Item 1 */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center">
                <Image 
                  src="/our-work-img-1.png"  
                  alt="Work 1" 
                  className="w-32 h-32 object-cover rounded-full mb-4"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-semibold text-cyan-600 mb-2">Expert Carpentry Services</h3>
                <p className="text-gray-600">
                Our skilled carpenters bring precision and artistry to every project, whether it’s crafting custom furniture, installing cabinets, or building decks. With a keen eye for detail and a commitment to quality, we transform your vision into reality. From minor repairs to large-scale renovations, our carpentry services enhance the beauty and functionality of your home or business.
                </p>
              </div>
            </div>
  
            {/* Work Item 2 */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center">
                <Image 
                  src="/our-work-img-2.png"  
                  alt="Work 2" 
                  className="w-32 h-32 object-cover rounded-full mb-4"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-semibold text-cyan-600 mb-2">Reliable Plumbing Solutions</h3>
                <p className="text-gray-600">
                From leaky faucets to major pipe repairs, our experienced plumbers handle all types of plumbing challenges with ease and expertise. We offer comprehensive plumbing services, including installation, maintenance, and emergency repairs. Our team uses the latest tools and techniques to ensure efficient, long-lasting solutions that keep your water flowing smoothly and your home safe from water damage.
                </p>
              </div>
            </div>
  
            {/* Work Item 3 */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col items-center">
                <Image 
                  src="/our-work-img-3.png"  
                  alt="Work 3" 
                  className="w-32 h-32 object-cover rounded-full mb-4"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-semibold text-cyan-600 mb-2">Professional Electrical Services</h3>
                <p className="text-gray-600">
                Safety and reliability are at the core of our electrical services. Whether you need a full home rewiring, new lighting installation, or troubleshooting electrical issues, our licensed electricians are here to help. We provide high-quality electrical solutions that meet all safety standards and regulations, ensuring your home or business operates safely and efficiently. With our expertise, you can trust that your electrical systems are in good hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurWork;
  