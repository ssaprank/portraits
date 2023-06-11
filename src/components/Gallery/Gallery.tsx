import { useState, FC } from "react";
import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";

import "./Gallery.scss";
import {
  PhotoGalleryHoverOverlay,
  PhotoGalleryHoverOverlayIcon,
  PhotoGalleryItem,
} from "./styled-components";
import { GalleryLightbox } from "./GalleryLightbox/GalleryLightbox";
import { photos } from "../photos";

export const Gallery: FC<object> = () => {
  const [index, setIndex] = useState(-1);

  const theme = useTheme();
  const overSm = useMediaQuery(theme.breakpoints.up("sm"));
  const overLg = useMediaQuery(theme.breakpoints.up("lg"));
  const overXl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box sx={{ width: "90vw", margin: "auto" }}>
      <ImageList
        variant="masonry"
        cols={overXl ? 4 : overLg ? 3 : overSm ? 2 : 1}
        gap={20}
      >
        {photos.map((photo, index) => (
          <PhotoGalleryItem
            key={photo.src}
            aspectratio={photo.width / photo.height}
          >
            <img
              className="gallery__image-thumbnail"
              src={photo.src}
              alt={photo.src}
              loading="lazy"
            />
            <PhotoGalleryHoverOverlay onClick={() => setIndex(index)}>
              <PhotoGalleryHoverOverlayIcon>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                </svg>
              </PhotoGalleryHoverOverlayIcon>
            </PhotoGalleryHoverOverlay>
          </PhotoGalleryItem>
        ))}
      </ImageList>
      <GalleryLightbox index={index} setIndex={setIndex} />
    </Box>
  );
};
