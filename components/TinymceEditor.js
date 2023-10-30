import React from "react";
import { Editor } from "@tinymce/tinymce-react";

import TagInput from "./TagInput";
export default function App() {
  return (
    <>
      <div className="container  max-w-4xl mx-auto border-2 rounded-md mt-32 p-7">
        
        <div className="   ">
        <textarea
  className=" flex  w-full border-none overflow-y-clip pl-2 text-4xl font-extrabold text-gray-800 focus:outline-none placeholder-gray-600"
  type="text"
  placeholder="New Post title here..."
/>

        </div>
        <div className="Tag-Slection mb-4 ">
          <TagInput />
        </div>
        <div className="border-none  ">
          <Editor
            apiKey="7xdb3h2kdcdjc41rqpc49ecay4li0kj4ndj2g0fgv4xzxo2q"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              placeholder: "Write your post content here...",
            }}
          />
        </div>
        <div>
          <div className="gap-x-3">
            <button className="bg-blue-600 py-2 px-3 font-bold  m-3 rounded-md hover:bg-blue-800 cursor-pointer text-white">Publish</button>
            <button className="bg-gray-300 py-2 px-3 font-bold  m-3 rounded-md hover:bg-blue-800 hover:text-white border border-gray-300 cursor-pointer text-gray-700">Save Draft</button>
            <button className="bg-gray-300 py-2 px-3 font-bold  m-3 rounded-md hover:bg-blue-800 hover:text-white border border-gray-300 cursor-pointer text-gray-700">Reset</button>
            
          </div>
        </div>
      </div>
    </>
  );
}
