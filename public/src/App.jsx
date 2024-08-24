import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import backgroundImage from "./../more/9.png"; // Adjust the path
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FeatureSection from "./Components/FeatureSection";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees); // Fixed useState syntax

  return (
    <div
      className="m-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <FeatureSection></FeatureSection>
      <h1 className="font-ranch text-4xl text-[#331A15] p-6 pt-4 mb-10 mt-10 text-center">
        Our Popular Products
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees} // Correctly passing setCoffees
            backgroundImage={backgroundImage} // Pass backgroundImage if needed in the CoffeeCard
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
