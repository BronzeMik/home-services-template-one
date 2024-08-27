import img from '../../../public/about-us-home-img.png';
import Image from 'next/image';
const AboutUs = () => {
    return (
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-16" 
        style={{ backgroundImage: 'url("/home-about-us-bg.png")', backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
          {/* Left: Word Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-300 mb-3">About Us</h1>
            <h2 className="text-4xl font-extrabold mb-4">Full Home Repair Service Company</h2>
            <p className="mb-6 text-lg leading-relaxed">
              At Home Services Co., we pride ourselves on delivering top-notch handyman services that cater to all your home improvement needs. Our team of experienced professionals is dedicated to providing high-quality craftsmanship and reliable solutions, ensuring your satisfaction with every project.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it&apos;s plumbing, electrical repair, AC repair, or general home maintenance, we have the expertise to handle it all. Trust us to keep your home in perfect condition, with a commitment to excellence and attention to detail that sets us apart from the rest.
            </p>
            <button href="/services#plumbing" className="bg-blue-500 hover:bg-cyan-500 text-white px-4 py-3 rounded-lg mt-4">Learn More</button>
          </div>
  
          {/* Right: Image */}
          <div className="bg-transparent w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={img} 
              alt="About Us Image" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  