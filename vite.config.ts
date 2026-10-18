import { defineConfig } from "vite";
import { galleryHtml, structuredData } from "./src/render";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // Renders the photo list into index.html so the page works without JS
      name: "static-gallery",
      transformIndexHtml: (html) =>
        html
          .replace("<!--gallery-->", galleryHtml())
          .replace("<!--jsonld-->", structuredData()),
    },
  ],
});
