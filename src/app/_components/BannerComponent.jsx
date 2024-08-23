import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactBanner = () => {
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-3 px-6 flex flex-col md:flex-row justify-center items-center space-x-6 rounded-l-3xl">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-xl" />
          <span>(123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-xl" />
          <span>info@example.com</span>
        </div>
        <div className="hidden space-x-3 md:visible md:flex " >
          <a href="https://facebook.com" className="text-xl hover:text-gray-400" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-xl hover:text-gray-400" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-xl hover:text-gray-400" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    );
  };
  
  export default ContactBanner;
