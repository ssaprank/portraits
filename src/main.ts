import "@fontsource/italianno/latin-400.css";
import "photoswipe/style.css";
import "./style.css";

import PhotoSwipeLightbox from "photoswipe/lightbox";

// Fade lazy images in once they arrive (see `.js` rules in style.css)
document
  .querySelectorAll<HTMLImageElement>(".gallery img[loading=lazy]")
  .forEach((image) => {
    const reveal = () => image.classList.add("loaded");

    if (image.complete) {
      reveal();
    } else {
      image.addEventListener("load", reveal, { once: true });
    }
  });

const isImage = (event: PointerEvent) =>
  (event.target as HTMLElement).classList.contains("pswp__img");

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery",
  children: "a",
  // The core is only downloaded when a photo is opened for the first time
  pswpModule: () => import("photoswipe"),

  // No visible controls: close by clicking or tapping outside the photo, or with Esc
  arrowPrev: false,
  arrowNext: false,
  zoom: false,
  close: false,
  counter: false,
  imageClickAction: "zoom",
  bgClickAction: "close",
  tapAction: (_point, event) => {
    if (!isImage(event)) {
      lightbox.pswp?.close();
    }
  },
  clickToCloseNonZoomable: false,

  wheelToZoom: true,
  maxZoomLevel: 5,

  bgOpacity: 1,
  showHideAnimationType: "fade",
  showAnimationDuration: 1000,
  hideAnimationDuration: 1000,
});

lightbox.addFilter(
  "isKeepingPlaceholder",
  (isKeeping, content) => isKeeping || !content.element?.isConnected,
);

lightbox.init();
