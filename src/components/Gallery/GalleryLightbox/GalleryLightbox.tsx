import { FC, useCallback, useEffect } from "react";
import { Lightbox, SlideImage } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { renderConfig, zoomConfig, animationConfig } from "./config";
import { photos } from "../../photos";

type Props = {
  index: number;
  setIndex: (index: number) => void;
};

export const GalleryLightbox: FC<Props> = ({ index, setIndex }) => {
  const closeLightboxOnClickaway = useCallback<EventListener>(
    (event) => {
      const target = event.target as HTMLElement;

      const slideClicked = target.classList.contains("yarl__slide_image");

      if (index >= 0 && !slideClicked) {
        document.getElementById("close")?.click();
      }
    },
    [index]
  );

  useEffect(() => {
    window.addEventListener("click", closeLightboxOnClickaway);

    return () => {
      window.removeEventListener("click", closeLightboxOnClickaway);
    };
  }, [index, closeLightboxOnClickaway]);

  return (
    <Lightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={photos as SlideImage[]}
      plugins={[Zoom]}
      animation={animationConfig}
      zoom={zoomConfig}
      render={renderConfig}
    />
  );
};
