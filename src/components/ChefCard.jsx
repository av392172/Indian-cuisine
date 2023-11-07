import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ChefCard({ image, name, exp, likes }) {
  const navigate = useNavigate();

  const navigateToChefScreen = () => {
    navigate("/chef-recipe", {
      state: image,
    });
  };
  return (
    // <div className="border-2 border-e-blue-400 h-[350px] w-[300px]">
    //   <div className="h-[70%] w-auto">
    //     <img
    //       src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="chef 1"
    //       className="object-fill h-full w-auto"
    //     />
    //   </div>
    //   <h4 className="text-center">{`Name: ${name}`}</h4>
    //   <div className="flexBetween">
    //     <p>{`Experience: ${exp}`}</p>
    //     <p>{`Likes: ${likes}`}</p>
    //   </div>
    // </div>
    <div className="block rounded-lg bg-white dark:bg-neutral-700 h-[400px] w-[300px] border-2 border-gray-100 mb-20">
      {image && (
        <img
          className="rounded-t-lg h-[60%] w-full object-contain"
          // src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={image}
          alt=""
        />
      )}
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <div className="flexBetween mb-4">
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            {`Experience: ${exp} yrs`}
          </p>
          <div className="flexBetween gap-1">
            <img src="/heart.svg" alt="" className="h-4 w-4" />
            <p className="text-xs text-red-400 font-light">{likes}</p>
          </div>
        </div>
        <div onClick={navigateToChefScreen}>
          <button
            type="button"
            className="inline-block rounded bg-green-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600"
          >
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
