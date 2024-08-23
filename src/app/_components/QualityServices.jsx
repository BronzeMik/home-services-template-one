import { FaTools, FaBolt, FaSnowflake, FaHome } from 'react-icons/fa';

const QualityServices = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-300">
            Our Quality Services
          </h2>
          <p className='text-gray-800 text-5xl font-extrabold'>Quality Service For Quality Homes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Plumbing */}
          <div className="bg-white h-fit rounded-lg shadow-lg p-6 text-center">
            <FaTools className="text-5xl text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plumbing</h3>
            <div className='flex flex-col items-center'>
              <p className="text-gray-600">Expert plumbing services including pipe repair, faucet installation, and more.</p>
              <a href="/services#plumbing" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg hover:underline mt-4">Learn More</a>
            </div>
          </div>

          {/* Electrical Repair */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaBolt className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Electrical Repair</h3>
            <div className='flex flex-col items-center'>
                <p className="text-gray-600">Reliable electrical repair services for your home and business.</p>
              <a href="/services#plumbing" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg hover:underline mt-4">Learn More</a>
            </div>
          </div>

          {/* AC Repair */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaSnowflake className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AC Repair</h3>
            
            <div className='flex flex-col items-center'>
              <p className="text-gray-600">Keep your home cool with our professional AC repair services.</p>
              <a href="/services#plumbing" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg hover:underline mt-4">Learn More</a>
            </div>
          </div>

          {/* Home Repair */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaHome className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Home Repair</h3>
            
            <div className='flex flex-col items-center'>
              <p className="text-gray-600">Comprehensive home repair solutions for all your needs.</p>
              <a href="/services#plumbing" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg hover:underline mt-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityServices;
