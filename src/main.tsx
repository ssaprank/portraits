import ReactDOM from "react-dom/client";
import "./index.css";

import "yet-another-react-lightbox/styles.css";
import { App } from "./components/App";

// images from S3
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
