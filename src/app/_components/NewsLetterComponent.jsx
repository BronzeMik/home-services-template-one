import React from 'react';
import { TbMailFast } from "react-icons/tb";

const Newsletter = () => {
  return (
    <section
      className="newsletter-section flex justify-center items-center py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-800"
      data-element_type="section"
    >
      <div className="w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Title and Subtitle */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="mb-4">
              <h2 className="text-2xl md:text-5xl text-white font-extrabold style-gradient">Newsletter</h2>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Get the latest deals and promotions</h2>
            </div>
          </div>

          

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center">
            {/* Middle Column: Description */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div>
              <h5 className="text-lg text-white">Join Our Email List</h5>
            </div>
          </div>
            <form className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="email"
                className="w-full md:w-2/3 px-4 py-2 border rounded focus:outline-none"
                placeholder="Email"
              />
              <button
                type="submit"
                className="w-full md:w-1/3 bg-yellow-500 text-black py-2 rounded hover:bg-cyan-500 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

            <div className="flex justify-center items-center text-center">
          <TbMailFast className="text-9xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
