import React, { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <form className="flex gap-5 p-10 bg-gray-900">
        <input
          type="text"
          required
          placeholder="Search anything..."
          className="border-2 px-4 py-2 text-xl rounded outline-none w-full"
        />
        <button className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
