// components/CardComponent.js

const CardComponent = ({ icon, title, description }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
    <div className="text-4xl mb-4 text-cyan-500">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">
      <a href="#0" className="text-gray-800 hover:text-cyan-600">
        {title}
      </a>
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CardComponent;
