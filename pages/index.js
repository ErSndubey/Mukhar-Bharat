import React from 'react';
import '../app/globals.css';
import LeftSidebar from '../components/LeftSidebar'; // Import your LeftSidebar component
import MainContent from '../components/MainContent'; // Import your MainContent component
import RightSidebar from '../components/RightSidebar'; // Import your RightSidebar component
import Layout from '@/components/Layout';

const BlogHome = () => {
  return (
    <>
  
  <Layout>
    <div className=' mt-2 flex justify-center '>
      
      <div className="flex max-w-screen-xl justify-center mt-14">
        <div className="w-1/4 p-1 rounded-md">
          <LeftSidebar />
        </div>
        <div className="w-1/2 p-1 rounded-md">
          <MainContent />
        </div>
        <div className="w-1/4 p-1 rounded-md">
          <RightSidebar />
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default BlogHome;
