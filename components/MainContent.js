// Import necessary modules and components
import React, { useState, useEffect } from "react";
import ShimmerCardList from "./ShimmerCardList";
import reactionsData from "../pages/API/reaction_icons";

// Function to calculate and format time difference
const formatTimeAgo = (timestamp) => {
  const currentDate = new Date();
  const postDate = new Date(timestamp);
  const timeDifference = currentDate - postDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
};

// Define the MainContent component as a functional component
const MainContent = () => {
  // Define and initialize state variables using the useState hook
  const [isFilled, setIsFilled] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use the useEffect hook to make an HTTP request and fetch data
  useEffect(() => {
    // Fetch data from the specified URL
    fetch("https://dev.to/stories/feed/?page=1")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setPosts(data); // Update the 'posts' state with the fetched data
        setIsLoading(false); // Set loading state to false when data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  // Return JSX markup for the MainContent component
  return (
    <div className="rendered-article-feed overflow-y-scroll no-scrollbar max-h-screen ">
      {isLoading ? (
        <ShimmerCardList /> // Use the Shimmer component conditionally
      ) : (
        posts.map((post, index) => (
          <div
            key={post.id}
            className="one-complete-card mb-4 cursor-pointer border border-gray-200 shadow-md rounded-md"
          >
            <div className="Post-Image">
              <img className="rounded-t-md" src={post.main_image} alt="" />
            </div>
            <div className="text-content p-4">
              <div className="User_info flex w-full">
                <div className="user-image">
                  <img
                    className="rounded-full h-11 w-auto border hover:border-blue-600 p-0.5"
                    src={post.user.profile_image_url}
                    alt="author image"
                  />
                </div>
                <div className="Name-&-time ml-4 leading-tight">
                  <p className="user-name font-semibold text-slate-700 hover:text-gray-800">
                    {post.user.name}
                  </p>
                  <div className="flex text-sm text-slate-600">
                    <p>{post.readable_publish_date}</p>
                    <p className="time-of-post ml-2">
                      ({formatTimeAgo(post.published_timestamp)})
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-12 mt-4">
                <div className="post-heading text-3xl font-bold text-slate-800 hover:text-blue-600">
                  {post.title}
                </div>
                <div className="flex post-tags -ml-2 mt-3 text-gray-600 text-sm">
                  {post.tag_list.map((tag, index) => (
                    <div
                      key={index}
                      className="border hover:border-gray-300 py-1 px-2 rounded-md"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="reactions-and-comments flex items-center text-sm text-gray-600 ml-2">
                    <div className="post-reactions-and-comments flex my-5 gap-x-1 items-center">
                      <div className="reactions flex items-center  text-sm text-gray-600 ">
                        {post.public_reaction_categories.map((category) => (
                          <div
                            key={category.slug}
                            className="post-reactions flex my-5 gap-x-1"
                          >
                            <div>
                              <img
                                src={reactionsData[category.name].url}
                                alt={category.name}
                                className="h-5"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="hover:text-gray-800">
                        {post.public_reactions_count} <span className="hidden md:block">Reactions</span>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center">
                      <p>
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-slate-600 hover:fill-blue-700"
                        >
                          <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                        </svg>
                      </p>
                      <p className="hover:text-gray-800">
                        {post.comments_count} <span className="hidden md:block">comments</span>
                      </p>
                    </div>
                  </div>
                  <div className="time-to-read-and-Bookmark flex text-sm">
                    <div className="time-to-read">
                      <p className="mr-3 text-gray-600 hover:text-blue-600">
                        {post.reading_time} min read
                      </p>
                    </div>
                    <div className="bookmark-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsFilled(!isFilled)}
                        className={
                          isFilled
                            ? "fill-current text-blue-600"
                            : "fill-gray-700 hover:fill-blue-600"
                        }
                      >
                        <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))
      )}
    </div>
  );
};

export default MainContent;
