import React, { useState, useEffect } from "react";
import Button from "../core/Button";
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import "../assets/styles/SearchBar.css";

const SearchBar = ({ imageSearchKeyword, onImageSearchKeywordChange }) => {
  const [searchBarInputValue, setSearchBarInputValue] = useState("");
  const placeholder = "Please enter text to search images";

  const handleOnImageSearchKeywordChange = () => {
    onImageSearchKeywordChange(searchBarInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnImageSearchKeywordChange();
    }
  };

  const handleSearchBarInputValueChange = (event) => {
    setSearchBarInputValue(event.target.value);
  };

  useEffect(() => {
    setSearchBarInputValue(imageSearchKeyword);
  }, [imageSearchKeyword]);

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={searchBarInputValue}
        placeholder={placeholder}
        className="searchBarInputBox"
        onChange={handleSearchBarInputValueChange}
      />
        <IconButton edge="start" className="searchButton" onClick={handleOnImageSearchKeywordChange} color="inherit" aria-label="menu">
              <ImageSearchIcon fontSize="large" style={{ color: "#07bdbe" }}/>
        </IconButton>
    </div>
  );
};

export default SearchBar;
