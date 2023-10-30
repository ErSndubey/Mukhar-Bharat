import React, { useEffect } from "react";

const LeftSidebar = () => {

 

  return (
    <div className=" bg-white text-gray-700 p-4 w-96 ">
      <ul className="space-y-3 text-ellipsis md:text-sm">
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className=" flex "
          >
            🏠 <p className=" mx-3 ">Home</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            🎙️ <p className=" mx-3 ">Podcasts</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            📽️ <p className=" mx-3 ">Videos</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            #️⃣ <p className=" mx-3 ">Tags</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            ❤️ <p className=" mx-3 ">Advertise</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            🥪 <p className=" mx-3 ">About</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            📇 <p className=" mx-3 ">contact</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            📖 <p className=" mx-3 ">Guide</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            🤔 <p className=" mx-3 ">Software Comparisions</p> 
          </a>
        </li>
        <h2 className="my-4 font-bold ">Other</h2>

        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="#"
            className="flex"
          >
            🤖 <p className=" mx-3 ">Terms Of Uses</p> 
          </a>
        </li>
        <li className="flex items-center  cursor-pointer hover:text-blue-600 hover:underline  hover:bg-gray-300 p-1  rounded-md mr-1">
          <a
            href="https://www.linkedin.com/in/ersndubey/"
            className="flex "
            target="_blank"
          >
            🐱‍💻 <p className=" mx-3 font-semibold ">Built by <span className="text-pink-600 underline md:text-sm">Sachchidanand</span></p> 
          </a>
        </li>
      </ul>
      <div className="flex justify-start gap-x-4 mt-5 md:gap-x-1  ">
        <a
          href="https://twitter.com/thepracticaldev"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="agks8azz1otbo6wqseu4m4dbu0pxlke1"
            className="fill-slate-700"
          >
            <title id="agks8azz1otbo6wqseu4m4dbu0pxlke1">Twitter</title>
            <path
              d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
              
            ></path>
          </svg>
        </a>
        <a
          href="https://facebook.com/thepracticaldev"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="argvj3818l0h4bdk15063vgbs700twhq"
           
          >
            <title id="argvj3818l0h4bdk15063vgbs700twhq">Facebook</title>
            <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/forem"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="ad3s92ugdv3lzky1k6k49vwfweymu8n6"
            className="crayons-icon c-link__icon"
          >
            <title id="ad3s92ugdv3lzky1k6k49vwfweymu8n6">Github</title>
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
          </svg>
        </a>
        <a
          href="https://instagram.com/thepracticaldev"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="atryyleg9278kzuop6u3vm7ptulx7et8"
            className="crayons-icon c-link__icon"
          >
            <title id="atryyleg9278kzuop6u3vm7ptulx7et8">Instagram</title>
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
          </svg>
        </a>
        <a
          href="https://twitch.com/thepracticaldev"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="a1lm2gw9yscnzz8zleaenzfxv04l0o5w"
            className="crayons-icon c-link__icon"
          >
            <title id="a1lm2gw9yscnzz8zleaenzfxv04l0o5w">Twitch</title>
            <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
          </svg>
        </a>
        <a
          href="https://fosstodon.org/@thepracticaldev"
          target="_blank"
          className="text-gray-600 hover:text-red-600 "
          rel="noopener me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="a5sp8ifclr4xe26cu6j4sdhg4hjzh8ww"
            className="crayons-icon c-link__icon"
          >
            <title id="a5sp8ifclr4xe26cu6j4sdhg4hjzh8ww">Mastodon</title>
            <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
          </svg>
        </a>
      </div>
      <div className="mt-4">
        <div className="flex my-2 justify-between items-center mr-3 text-center">
          <h2 className="font-bold ">Your Tags</h2>
          <p>#️⃣</p>
        </div>
        <ul className="space-y-2 ml-2 text-base font-mono max-h-36 overflow-y-scroll  ">
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#react</li>
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#tailwind</li>
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#Java</li>
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#Python</li>
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#vscode</li>
          <li className="cursor-pointer hover:text-blue-600 hover:underline hover:bg-gray-300 p-1  rounded-md mr-1">#css</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
