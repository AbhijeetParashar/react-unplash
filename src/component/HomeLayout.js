import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ImageListLayout from "./ImageListLayout";
import ImageView from "./ImageView";
import TopBar from '../core/TopBar'

const Home = ({ match }) => {
  const [imageId, setImageId] = useState(null);
  const [imageSearchKeyword, setImageSearchKeyword] = useState("");

  const handleImageSearchKeywordChange = (imageSearchKeyword) => {
    setImageSearchKeyword(imageSearchKeyword);
  };

  useEffect(() => {
    if (match.params && match.params.searchKeyword) {
      setImageSearchKeyword(match.params.searchKeyword);
      if (match.params.imageId) {
        setImageId(match.params.imageId);
      } else {
        setImageId("");
      }
    }
  }, [match.params, match.params.searchKeyword]);

  return (
    <div>
      <TopBar title={"React image search engine app"} />
      <SearchBar
        imageSearchKeyword={imageSearchKeyword}
        onImageSearchKeywordChange={handleImageSearchKeywordChange}
      />
      <ImageListLayout imageSearchKeyword={imageSearchKeyword} />
      <ImageView imageId={imageId} imageSearchKeyword={imageSearchKeyword} />
    </div>
  );
};

export default Home;
