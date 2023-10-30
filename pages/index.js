import React from "react";
import "../app/globals.css";
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import Layout from "@/components/Layout";

const BlogHome = () => {
  return (
    <Layout>
      <div className="mt-2 flex justify-center ">
        <div
          className="flex flex-wrap justify-center md:justify-between  mt-14 w-full "
         
        >
          <div
            className="w-1/4 p-1 rounded-md hidden md:block"
            style={{
              flex: "0 0 calc(25% - 1rem)", // Adjust this as per your design
            }}
          >
            <LeftSidebar />
          </div>
          <div
            className="w-full  p-1 rounded-md"
            style={{
              flex: "0 0 calc(50% - 1rem)", // Adjust this as per your design
            }}
          >
            <MainContent />
          </div>
          <div
            className="w-full md:w-1/4 p-1 rounded-md hidden lg:block"
            style={{
              flex: "0 0 calc(25% - 1rem)", // Adjust this as per your design
            }}
          >
            <RightSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogHome;
