import React from "react";
import { FEATURES } from "../constants";

function Recipes() {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 min-h-[900px]">
          <img
            src="./phone.png"
            alt="img"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-[60%] flex-col">
          <div className="relative">
            <h2 className="bold-64">Our App</h2>
          </div>
          <ul className="mt-20 grid gap-20 grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-7 bg-green-50">
        <img src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-[30px] text-gray-30">{description}</p>
    </li>
  );
};

export default Recipes;
