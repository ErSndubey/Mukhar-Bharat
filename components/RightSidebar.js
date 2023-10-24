import React from "react";

const RightSidebar = () => {
  return (
    <div className="bg-white w-80">
      {/* first block starts */}
      <div className="grid grid-cols-1 shadow-sm divide-y   text-base text-gray-700 border border-gray-200 rounded-md">
        <div className=" cursor cursor-pointer font-bold py-2 text-lg text-gray-700 ml-2 h hover:text-blue-600">
          #discuss
        </div>
        {/* line */}
        <div className="cursor-pointer py-2  rounded-md  group transition ">
          <p id="mainText" className="mx-3 group-hover:text-blue-600">
            Are Tech Industry Layoffs Reflecting New Tech Landscape Realities?
          </p>
          <p id="comments" className="mx-3 ">
            5 comments
          </p>
        </div>
        {/* line */}
        <div className="cursor-pointer py-2  rounded-md  group ">
          <p id="mainText" className="mx-3 group-hover:text-blue-600">
            Are Tech Industry Layoffs Reflecting New Tech Landscape Realities?
          </p>
          <p id="comments" className="mx-3 ">
            5 comments
          </p>
        </div>
        {/* line */}
        <div className="cursor-pointer py-2  rounded-md  group ">
          <p id="mainText" className="mx-3 group-hover:text-blue-600">
            Are Tech Industry Layoffs Reflecting New Tech Landscape Realities?
          </p>
          <p id="comments" className="mx-3 ">
            5 comments
          </p>
        </div>
        {/* line */}
        <div className="cursor-pointer py-2  rounded-md  group ">
          <p id="mainText" className="mx-3 group-hover:text-blue-600">
            Are Tech Industry Layoffs Reflecting New Tech Landscape Realities?
          </p>
          <p id="comments" className="mx-3 ">
            5 comments
          </p>
        </div>
        {/* line */}
        <div className="cursor-pointer py-2  rounded-md  group ">
          <p id="mainText" className="mx-3 group-hover:text-blue-600">
            Are Tech Industry Layoffs Reflecting New Tech Landscape Realities?
          </p>
          <p id="comments" className="mx-3 ">
            5 comments
          </p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md mt-4">
        <div className="py-4 px-7 text-justify text-gray-600 text-sm ">
          <p className="my-5">
           <span className="text-blue-600"> DEV Community </span>  A constructive and inclusive social network for
            software developers. With you every step of your journey.
          </p>
          <p className="my-5"> 
          <span className="text-blue-600">Built on Forem </span> — the open source software that powers DEV and other
            inclusive communities.
          </p>
          <p>Made with love and Ruby on Rails. DEV Community © 2016 - 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
