import React, { useEffect, useState } from "react";
import getPagination from "../hooks/useGetPaginatedImagesByKeyword";
import UserImageDatail from "./UserImageDatail";
import "../assets/styles/ImageListLayout.css";
import Button from "../core/Button";
import { useHistory } from "react-router-dom";

const ImageListLayout = ({ imageSearchKeyword }) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  const [images, totalPages, isLoading] = getPagination(
    imageSearchKeyword,
    currentPage
  );

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleImageClick = (id) => {
    history.push(`/${imageSearchKeyword}/${id}`);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [imageSearchKeyword]);

  return (
    <div>
      <div className="imageListContainer">
        {images &&
          images.map((image) => (
            <UserImageDatail
              key={image.id}
              image={image}
              onImageClick={handleImageClick}
            />
          ))}
      </div>
      {currentPage < totalPages && (
        <div className="loadMoreButtonContainer">
          <Button
            className="loadMoreButton"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageListLayout;
