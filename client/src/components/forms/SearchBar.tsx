import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleOnClick(e) {
    e.preventDefault();
    setSearchValue("");
  }

  function handleOnSubmit(e) {}

  return (
    <form
      action=""
      className="hidden lg:flex bg-white w-80 text-black border-green-900 items-center gap-2 px-3 rounded-3xl"
    >
      <SearchIcon color="#000000" />
      <input
        id="query"
        className="h-full w-full"
        type="text"
        placeholder="Zoeken..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <button
        className={searchValue ? "visible" : "invisible"}
        onClick={handleOnClick}
      >
        <CloseIcon color="#000000" />
      </button>
      {/* {searchValue && (
  
      )} */}
    </form>
  );
}
