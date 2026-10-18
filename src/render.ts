// Runs at build time (imported by vite.config.ts) to put the gallery and
// structured data straight into index.html.
import { photos } from "./photos";

export const SITE_URL = "https://amelin-photography.vercel.app/";
const AUTHOR = "Stanislav Amelin";
const INSTAGRAM_URL = "https://www.instagram.com/amelin.photography/";

const CLOUDINARY_URL = "https://res.cloudinary.com/dlhhw8bit/image/upload";
const FOLDER = "portraits-website-large";
const FULL_WIDTH = 2048;

const THUMBNAIL_WIDTHS = [400, 600, 800, 1200, 1600];
// Tile width for the 4/3/2/1 column layout of the 90vw gallery in style.css
const THUMBNAIL_SIZES =
  "(min-width: 1536px) 22vw, (min-width: 1200px) 29vw, (min-width: 600px) 44vw, 90vw";
// Loaded right away so the top of the page paints without waiting for layout
const EAGER_COUNT = 2;

// f_auto serves AVIF/WebP where supported, q_auto picks the compression level
const imageUrl = (file: string, width?: number) =>
  `${CLOUDINARY_URL}/f_auto,q_auto${width ? `,w_${width}` : ""}/${FOLDER}/${file}.jpg`;

const escapeAttribute = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const loadingAttributes = (index: number) => {
  if (index === 0) return 'fetchpriority="high"';
  if (index < EAGER_COUNT) return "";
  return 'loading="lazy" decoding="async"';
};

export const galleryHtml = () =>
  photos
    .map(
      ({ file, height, alt }, index) => `
      <a class="gallery__item" href="${imageUrl(file)}" data-pswp-width="${FULL_WIDTH}" data-pswp-height="${height}">
        <img
          src="${imageUrl(file, 800)}"
          srcset="${THUMBNAIL_WIDTHS.map((width) => `${imageUrl(file, width)} ${width}w`).join(", ")}"
          sizes="${THUMBNAIL_SIZES}"
          width="${FULL_WIDTH}"
          height="${height}"
          alt="${escapeAttribute(alt)}"
          ${loadingAttributes(index)}
        />
        <span class="gallery__overlay" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
          </svg>
        </span>
      </a>`
    )
    .join("");

export const structuredData = () => {
  const person = { "@type": "Person", name: AUTHOR };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...person,
        "@id": `${SITE_URL}#person`,
        jobTitle: "Portrait Photographer",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kraków",
          addressCountry: "PL",
        },
        sameAs: [INSTAGRAM_URL],
      },
      {
        "@type": "ImageGallery",
        name: `${AUTHOR} Portrait Photography`,
        url: SITE_URL,
        author: { "@id": `${SITE_URL}#person` },
        image: photos.map(({ file, alt }) => ({
          "@type": "ImageObject",
          contentUrl: imageUrl(file),
          description: alt,
          creator: person,
          creditText: AUTHOR,
          copyrightNotice: `© ${AUTHOR}`,
        })),
      },
    ],
  };

  // "<" is escaped so the JSON can never close the surrounding <script> tag
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
};
