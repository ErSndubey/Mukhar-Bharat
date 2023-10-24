import React, { useState } from 'react';
import 'quill/dist/quill.snow.css'; // Import Quill's CSS
import dynamic from 'next/dynamic';

// Dynamically import Quill editor to avoid SSR issues
const DynamicQuill = dynamic(import('../components/QuillEditor'), { ssr: false });

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [richTextContent, setRichTextContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save the post to your database
    console.log('Title:', title);
    console.log('Content:', richTextContent);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded p-2"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter your title here" // Add a placeholder
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Content</label>
          <DynamicQuill value={richTextContent} onChange={setRichTextContent} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
