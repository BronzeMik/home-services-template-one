const HeroBanner = () => {
    return (
      <div className="relative w-full pb-16 md:mt-[-75px] z-30">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white text-center py-7 rounded-lg shadow-lg">
        <div className="flex gap-4 text-nowrap animate-slide">
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Hannah & Hannah</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">B2B Realty</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Wilson Real Estate</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Schaffer Builds</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Morgan Realty</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          {/* Repeat the content to create a seamless loop */}
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Hannah & Hannah</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">B2B Realty</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Wilson Real Estate</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Schaffer Builds</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">|</p>
          <p className="text-2xl uppercase font-bold italic whitespace-nowrap">Morgan Realty</p>
        </div>
          
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  