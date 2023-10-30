import React, { useState, useEffect } from "react";

const TagInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Fetch all available tag suggestions from the API when the component mounts
    fetch("https://dev.to/tags/suggest")
      .then((response) => response.json())
      .then((data) => {
        setAllTags(data);
      })
      .catch((error) => {
        console.error("Error fetching all tag suggestions:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);

    // Filter suggestions based on user input
    const inputValueLowerCase = newInputValue.toLowerCase();
    const filteredSuggestions = allTags.filter((tag) =>
      tag.name.toLowerCase().includes(inputValueLowerCase)
    );

    setFilteredSuggestions(filteredSuggestions);
  };

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className=" flex border px-2 py-1 m-1 rounded items-center "
          >
            {tag}
            <button
              onClick={() => handleTagRemove(tag)}
              className={`ml-2 bg-${tag.bg_color_hex} `}
            >
              <svg
                className="hover:fill-red-600 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="#️⃣ Add up to 4 Tags..."
        className="w-full p-2 border-none rounded focus:outline-none"
      />
            {inputValue.length > 0 ? (
              <div className=" container mt-2 overflow-y-scroll h-96 z-10  w-full max-w-4xl  p-5 bg-white border-gray-300 rounded-md border-2">
              {inputValue && ( // Conditionally render filtered suggestions only when there's input
                <ul>
                  {filteredSuggestions.map((tag) => (
                    <li
                      key={tag.name}
                      onClick={() => handleTagSelect(tag.name)}
                      className="cursor-pointer hover:underline  border-none py-4"
                    >
                      <div className=" border-none font-bold text-gray-700">{tag.name}</div>
                      <div className="hover:no-underline" id={`output-container-${tag.name}`}>
                        {/* Render the HTML content from tag.short_summary using dangerouslySetInnerHTML */}
                        <div className=""
                          dangerouslySetInnerHTML={{ __html: tag.short_summary }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
      ) : (
        <p></p>
      )}

    </div>
  );
};

export default TagInput;
