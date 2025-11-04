import { useState, FC, useCallback } from "react";
import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";

import "./Gallery.scss";
import {
  PhotoGalleryHoverOverlay,
  PhotoGalleryHoverOverlayIcon,
  PhotoGalleryItem,
} from "./styled-components";
import { GalleryLightbox } from "./GalleryLightbox/GalleryLightbox";
import { photos } from "../photos";
import {
  BREAKPOINT_LARGE,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
  FULL_WIDTH,
} from "../../constants";

export const Gallery: FC<object> = () => {
  const [index, setIndex] = useState(-1);
  const [loaded, setLoaded] = useState<Array<boolean>>(
    Array(photos.length).fill(false)
  );

  const handleImageLoaded = useCallback((index: number) => {
    setLoaded((loaded) => {
      const newLoaded = [...loaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  }, []);

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
            // key={photo.srcSet[BREAKPOINT_LARGE]}
            aspectratio={FULL_WIDTH / photo.fullHeight}
          >
            <img
              className={`gallery__image-thumbnail${
                loaded[index] ? " loaded" : ""
              }`}
              srcSet={`${photo.srcSet.small} ${BREAKPOINT_SMALL}w, ${photo.srcSet.medium} ${BREAKPOINT_MEDIUM}w, ${photo.srcSet.large} ${BREAKPOINT_LARGE}w, ${photo.srcSet.large}`}
              sizes={`(max-width: ${BREAKPOINT_SMALL}px) ${BREAKPOINT_SMALL}px, (max-width: ${BREAKPOINT_MEDIUM}px) ${BREAKPOINT_MEDIUM}px, (max-width: ${BREAKPOINT_LARGE}px) ${BREAKPOINT_LARGE}px, ${BREAKPOINT_LARGE}px`}
              alt="Amelin Photography"
              loading="lazy"
              onLoad={() => handleImageLoaded(index)}
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
