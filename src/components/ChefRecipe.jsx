import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import RecipeTable from "./RecipeTable";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Banner = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div
      // className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-5xl`}
      className={`h-full w-full min-w-[1100px] bg-[url('/banner-chef.jpg')] bg-cover bg-no-repeat rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between px-20 py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <img src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-gray-800 text-3xl">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
            {/* likes recipes experience */}
          </div>
        </div>
      </div>
    </div>
  );
};

function ChefRecipe() {
  const location = useLocation();
  const image = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const des = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus dolor nemo ex suscipit soluta voluptas doloribus tempora, consectetur officiis beatae omnis repudiandae ea, quibusdam ipsam? Culpa tempora eaque quod?`;
  return (
    <>
      <Navbar />
      <section className="max-container relative flex flex-col py-20 mb-10">
        <div className="hide-scrollbar flex lg:h-[400px] xl:h-[640px] w-full items-start justify-start gap-8 overflow-x-auto">
          <Banner
            backgroundImage="bg-bg-img-1"
            title="Sanjeev Kapoor"
            subtitle={des}
            peopleJoined="50+ joined"
          />
          <Banner
            backgroundImage="bg-bg-img-2"
            //   backgroundImage="bg-[url('/img-3.jpg')]"
            title="Sanjeev Kapoor"
            subtitle={des}
            peopleJoined="50+ joined"
          />
        </div>

        <div className="flexEnd px-6 -mt-60 mr-6">
          <div className="max-w-[300px] relative h-[300px] w-full overflow-hidden rounded-3xl">
            <img
              // src="/img-3.jpg"
              src={image}
              alt="chef"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <RecipeTable />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ChefRecipe;
