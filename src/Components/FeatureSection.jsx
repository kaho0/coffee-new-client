import React from "react";
import { FaCoffee, FaStar, FaLeaf, FaFire } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="bg-[#ECEAE3] py-4 md:py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Awesome Aroma */}
        <div className="text-center p-2">
          <FaCoffee className="text-3xl md:text-4xl text-[#331A15] mx-auto mb-2" />
          <h3 className="text-sm md:text-base font-semibold mb-1 text-[#331A15]">
            Awesome Aroma
          </h3>
          <p className="text-[#331A15] text-xs md:text-sm">
            You will definitely be amazed by the rich aroma of our coffee.
          </p>
        </div>

        {/* High Quality */}
        <div className="text-center p-2">
          <FaStar className="text-3xl md:text-4xl text-[#331A15] mx-auto mb-2" />
          <h3 className="text-sm md:text-base font-semibold mb-1 text-[#331A15]">
            High Quality
          </h3>
          <p className="text-[#331A15] text-xs md:text-sm">
            We use the finest quality coffee beans, maintaining high standards.
          </p>
        </div>

        {/* Pure Grades */}
        <div className="text-center p-2">
          <FaLeaf className="text-3xl md:text-4xl text-[#331A15] mx-auto mb-2" />
          <h3 className="text-sm md:text-base font-semibold mb-1 text-[#331A15]">
            Pure Grades
          </h3>
          <p className="text-[#331A15] text-xs md:text-sm">
            Our coffee contains the finest grades from all over the world.
          </p>
        </div>

        {/* Proper Roasting */}
        <div className="text-center p-2">
          <FaFire className="text-3xl md:text-4xl text-[#331A15] mx-auto mb-2" />
          <h3 className="text-sm md:text-base font-semibold mb-1 text-[#331A15]">
            Proper Roasting
          </h3>
          <p className="text-[#331A15] text-xs md:text-sm">
            Our coffee is brewed by expert hands with the best roasting process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
