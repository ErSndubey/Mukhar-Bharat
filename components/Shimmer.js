import React from "react";

const Shimmer = () => {
  return (
    <div className="one-complete-card mb-4 cursor-pointer border border-gray-300 shadow-md rounded-md animate-pulse">
      {/* Shimmer content */}
      <div className="Post-Image bg-gradient-to-r from-gray-300 to-gray-400 h-60 rounded-md" style={{ width: "1000px" }}></div>
      <div className="text-content p-4 ">
        <div className="User_info flex items-center">
          <div className="user-image mr-2 rounded-full h-11 w-11 border hover:border-blue-600  bg-gray-300"></div>
          <div className=" flex-col Name-&-time  leading-tight">
            <p className="user-name bg-gray-300 rounded-md h-6 w-48 mb-4"></p>
            <div className="flex text-sm text-slate-600 gap-x-3">
              <p className="bg-gray-300 rounded-md h-4 w-20"></p>
              <p className="time-of-post bg-gray-300 rounded-md h-4 w-24"></p>
            </div>
          </div>
        </div>
        <div className="ml-12 mt-4">
          <div className="post-heading text-3xl font-bold text-slate-800 hover:text-blue-600 bg-gray-300 rounded-md h-8 w-80"></div>
          <div className="flex post-tags  mt-3 text-gray-600 text-sm">
            <div className="border hover:border-gray-300 py-1  rounded-md bg-gray-300 h-5 w-20"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="reactions-and-comments flex items-center gap-x-3 text-sm text-gray-600">
              <div className="post-reactions-and-comments flex my-5 gap-x-2 items-center">
                <div className="reactions flex items-center text-sm text-gray-600">
                  <div className="post-reactions flex my-5 gap-x-1">
                    <div className=" bg-gray-300 rounded md"></div>
                  </div>
                </div>
                <div className="hover:text-gray-800 bg-gray-300 h-5 w-36 rounded-md"></div>
              </div>
              <div className=" flex items-center">
                <p className="bg-gray-300 h-4 w-36 rounded-md"></p>
              </div>
            </div>
            <div className="time-to-read-and-Bookmark flex text-sm">
              <div className="time-to-read">
                <p className="mr-3 text-gray-600  bg-gray-300 h-4 w-24 rounded-md"></p>
              </div>
              <div className="bookmark-icon h-4 w-5 bg-gray-300 rounded-md">
               
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Shimmer;
