import { useState } from 'react';

const ContactForm = ({formStyles,title}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subService: '',
    otherDetails: '',
    message: ''
  });

  const serviceOptions = {
    'Plumbing': ['Pipe Repair', 'Faucet Installation', 'Drain Cleaning', 'Other'],
    'Electrical': ['Light Fixture Installation', 'Outlet Repair', 'Wiring Upgrade', 'Other'],
    'Carpentry': ['Furniture Assembly', 'Custom Shelving', 'Door Repair', 'Other'],
    'Painting': ['Interior Painting', 'Exterior Painting', 'Touch-Up Work', 'Other'],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    setFormData({
      ...formData,
      service: e.target.value,
      subService: '',
      otherDetails: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex justify-center w-[100%]'>
    <form onSubmit={handleSubmit} className={`${formStyles} space-y-4`}>
      { title && <h2 className="text-2xl font-bold mb-4">{title}</h2> }
      <div>
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder='Full Name'
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder='Contact Email'
          required
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-gray-700">Select Service:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleServiceChange}
          className="border border-gray-300 p-2 w-full rounded-md"
          required
        >
          <option value="">--Select a Service--</option>
          {Object.keys(serviceOptions).map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>
      {formData.service && (
        <div>
          <label htmlFor="subService" className="block text-gray-700">Select Specific Work:</label>
          <select
            id="subService"
            name="subService"
            value={formData.subService}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
            required
          >
            <option value="">--Select Specific Work--</option>
            {serviceOptions[formData.service].map(subService => (
              <option key={subService} value={subService}>{subService}</option>
            ))}
          </select>
        </div>
      )}
      {formData.subService === 'Other' && (
        <div>
          <label htmlFor="otherDetails" className="block text-gray-700">Please Specify:</label>
          <input
            type="text"
            id="otherDetails"
            name="otherDetails"
            value={formData.otherDetails}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder='Details'
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-gray-700">Additional Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder='Message'
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Send Request
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
