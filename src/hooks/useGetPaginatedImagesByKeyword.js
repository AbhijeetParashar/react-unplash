import { useEffect, useState } from "react";
import { toJson } from "unsplash-js";
import { UNSPLASH } from "../layout/App";
import { PAGINATION_PAGE_SIZE } from "../constant/constant";

function useGetPaginatedImagesByKeyword(
  imageSearchKeyword = "",
  page = 1,
  pageSize = PAGINATION_PAGE_SIZE
) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (imageSearchKeyword) {
      setIsLoading(true);
      UNSPLASH.search
        .photos(imageSearchKeyword, page, pageSize, { orientation: "portrait" })
        .then(toJson)
        .then((json) => {
          if (page > 1) {
            setImages((prevImages) => [...prevImages, ...json.results]);
          } else {
            setImages(json.results);
            setTotalPages(json.total_pages);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [imageSearchKeyword, page, pageSize]);

  return [images, totalPages, isLoading];
}

export default useGetPaginatedImagesByKeyword;
