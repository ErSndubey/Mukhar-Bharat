// pages/editor.js
import TinymceEditor from "../components/TinymceEditor";
import { useState } from "react";

const MyEditor = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <div className="container mx-auto mt-8 h-screen overflow-clip">
      <TinymceEditor
        initialValue={content}
        handleEditorChange={handleEditorChange}
      />
      <div className="mt-4">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default MyEditor;
