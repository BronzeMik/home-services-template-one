// components/Footer.jsx
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Image src={logo} alt="Site Logo" className="mb-4" width={200} height={200} />
            <p className="text-sm">
              Providing quality services and support for over a decade. Our commitment to excellence is our top priority.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Consultation</li>
              <li>Support</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i> 1234 Elm Street, Some City, ST 56789
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2"></i> (123) 456-7890
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i> contact@company.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
