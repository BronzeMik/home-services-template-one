import Image from "next/image";
const ClientReview = () => {
    return (
      <section className="py-16 bg-gray-100">
        {/* Top Section: Title, Subtitle, and Paragraph */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center mb-12">
          {/* Left: Title and Subtitle */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 mt-2">Testimonials from our satisfied customers</p>
          </div>
          
          {/* Right: Short Paragraph */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700">
              Our clients appreciate the high-quality services we provide. Read what they have to say about their experiences working with us. We are proud to share their feedback and look forward to serving you with the same dedication and excellence.
            </p>
          </div>
        </div>
  
        {/* Bottom Section: Client Review */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-900 py-20 px-16 rounded-lg shadow-lg max-w-4xl mx-auto flex items-center">
          {/* Client Image */}
          <Image 
            src="/home-client-review.jpg"  // Replace with the actual path to your client image in the public folder
            alt="Client" 
            className="w-20 h-20 rounded-full mr-6"
            width={300}
            height={200}
          />
          
          {/* Client Name and Review */}
          <div className="text-white">
            <h4 className="text-xl font-semibold">Kim Levitz</h4>
            <p className="text-sm">Homeowner</p>
            <p className="mt-2">
              "Working with this team was a fantastic experience. Their professionalism, quality of work, and attention to detail exceeded all of our expectations. We highly recommend their services!"
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ClientReview;
  