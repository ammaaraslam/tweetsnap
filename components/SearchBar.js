import { MdOutlineCamera } from "react-icons/md";

import React from "react";
function SearchBar({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-0 mt-4 w-3/4 md:w-1/2 ml-auto mr-auto md:-mt-11"
    >
      <label className="hidden" for="search-form">
        Search
      </label>
      <input
        className="h-12 font-medium text-secondary pl-2 pr-16 outline-none bg-text dark:bg-textDark border-2 border-textS dark:border-textSDark rounded-2xl w-full placeholder:text-secondary placeholder:mt-auto placeholder:mb-auto dark:placeholder:text-secondary focus:bg-textS dark:focus:bg-textSDark transition-all duration-200"
        placeholder="Paste/Enter Link to you Tweet"
        type="text"
      />
      <button
        type="submit"
        className="p-2 font-medium w-16 h-12 items-center text-center text-secondary hover:text-textLight dark:hover:text-textDark bg-text dark:bg-textDark border-2 border-secondary dark:border-secondary focus:bg-secondary dark:focus:bg-secondary hover:bg-secondary dark:hover:bg-secondary absolute rounded-2xl -translate-x-16 transition-all duration-200"
      >
        <MdOutlineCamera className="ml-auto mr-auto text-2xl" />
      </button>
    </form>
  );
}

export default SearchBar;
