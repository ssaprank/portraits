export const zoomConfig = {
  maxZoomPixelRatio: 5,
  zoomInMultiplier: 2,
  doubleTapDelay: 300,
  doubleClickDelay: 300,
  doubleClickMaxStops: 1,
  keyboardMoveDistance: 50,
  wheelZoomDistanceFactor: 1000,
  pinchZoomDistanceFactor: 2000,
  scrollToZoom: true,
};

export const renderConfig = {
  iconZoomIn: () => null,
  iconZoomOut: () => null,
  buttonNext: () => null,
  buttonPrev: () => null,
  iconClose: () => <span key="toolbar-close" id="close"></span>,
};

export const animationConfig = {
  fade: 1000,
};
