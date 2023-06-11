import { ImageListItem, ImageListItemProps, styled } from "@mui/material";

export const PhotoGalleryHoverOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "opacity 0.4s ease",
  backgroundColor: "rgba(108, 76, 52, 0.5)",
  "&:hover": {
    opacity: 1,
  },
});

export const PhotoGalleryHoverOverlayIcon = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(2)",
  fill: "#fff",
  opacity: 0.7,
});

export const PhotoGalleryItem = styled(ImageListItem)<
  ImageListItemProps & { aspectratio: number }
>(({ aspectratio }) => ({
  cursor: "pointer",
  borderRadius: "2%",
  overflow: "hidden",
  border: "2px solid rgba(108, 76, 52, 0.5)",
  aspectRatio: aspectratio,
}));
