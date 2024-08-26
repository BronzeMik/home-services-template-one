import { useState } from "react";

function ServicesSideBar({
  residentialService,
  commercialService,
  propertyManagementService,
}) {
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion open/close
  const toggleAccordion = (accordion) => {
    if (openAccordion === accordion) {
      setOpenAccordion(null); // Close if already open
    } else {
      setOpenAccordion(accordion); // Open the clicked accordion
    }
  };

  return (
    <aside className="border-r-2 border-r-slate-100 shadow-md py-3 overflow-y-auto">
      <div className="w-full px-4 py-2 bg-blue-900">
        <h2 className="text-2xl font-bold text-center text-white uppercase">
          Electrical Services
        </h2>
      </div>

      <div>
        {/* Accordion Item 1 */}
        <div className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(1)} // Toggle accordion 1
            >
              <span>Residential</span>
              <i
                className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
                  openAccordion === 1 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </h6>
          <div
            className={`${
              openAccordion === 1 ? "h-auto" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              <ul className="pl-5 list-disc">
                {residentialService.map((service, index) => (
                  <li
                    key={index}
                    className="mb-2 cursor-pointer hover:text-cyan-500 hover:translate-x-2 text-lg"
                  >
                    <p className="text-blue-gray-500 hover:text-blue-gray-700">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(2)} // Toggle accordion 2
            >
              <span>Commercial</span>
              <i
                className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
                  openAccordion === 2 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </h6>
          <div
            className={`${
              openAccordion === 2 ? "h-auto" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              <ul className="pl-5 list-disc">
                {commercialService.map((service, index) => (
                  <li
                    key={index}
                    className="mb-2 cursor-pointer hover:text-cyan-500 hover:translate-x-2 text-lg"
                  >
                    <p className="text-blue-gray-500 hover:text-blue-gray-700">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
              onClick={() => toggleAccordion(3)} // Toggle accordion 3
            >
              <span>Property Management Companies</span>
              <i
                className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
                  openAccordion === 3 ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </h6>
          <div
            className={`${
              openAccordion === 3 ? "h-auto" : "h-0"
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              <ul className="pl-5 list-disc">
                {propertyManagementService.map((service, index) => (
                  <li
                    key={index}
                    className="mb-2 cursor-pointer hover:text-cyan-500 hover:translate-x-2 text-lg"
                  >
                    <p className="text-blue-gray-500 hover:text-blue-gray-700">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="bg-blue-800 text-white p-6 shadow-lg mb-6 mt-8">
        <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
        <p className="mb-4">
          Get 20% off your first electrical service with us! Don't miss out on
          this limited-time offer.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
          Claim Your Discount
        </button>
      </div>

      {/* Contact Us CTA */}
      <div
      className="relative bg-cover bg-center p-6 rounded-lg shadow-lg mb-6 text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
        <p className="mb-4">
          Contact us today to learn more about our services or to schedule an
          appointment!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
    </aside>
  );
}

export default ServicesSideBar;
