import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 border-b-2 py-2 items-center fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="w-full flex justify-between max-w-screen-xl mx-auto items-center">
          {/* Logo and search bar container */}
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Link href="/">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                className=" h-10"
                alt="logo"
              />
            </Link>

            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-gray-800 pl-2 ml-7 border  border-gray-300 focus:border-blue-600 py-1.5 rounded-md  w-96 max-w-lg  focus:outline-none focus:shadow-outline focus:border-2"
              />
              <i className="absolute inset-y-0 px-1.5 m-0.5 cursor-pointer rounded-md right-0 flex items-center text-gray-700 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </i>
            </div>
          </div>
          {/* craete post , notification and user avtar container */}
          <div className="flex">
            {/* Create Post Button */}
           
            <Link href="/create-post">
              <h2 className="bg-white text-blue-600 font-semibold px-4 py-1.5 border-2 rounded-md border-blue-600 hover:underline hover:bg-blue-600 hover:text-white">
                Create Post
              </h2>
            </Link>

            {/* Notification Button */}
            <button className="bg-none flex items-center  px-1.5 ml-5 rounded-md hover:bg-gray-200 hover:text-blue-700 cursor-pointer">
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> </svg>

            </button>

            {/* User Avatar */}
            <div className="ml-5 flex items-center cursor-pointer">
            <svg className="fill-gray-700 hover:fill-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
