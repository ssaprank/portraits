import {
  BREAKPOINT_LARGE,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
} from "../constants";

const URL_FORMAT =
  "https://res.cloudinary.com/dlhhw8bit/image/upload/{PLACEHOLDER}.jpg";

const LARGE_FOLDER_PREFIX = "portraits-website-large";
const MEDIUM_FOLDER_PREFIX = "portraits-website-medium";
const SMALL_FOLDER_PREFIX = "portraits-website-small";

const images = [
  {
    name: "november",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "november_l",
      [BREAKPOINT_MEDIUM]: "november_m",
      [BREAKPOINT_SMALL]: "november",
    },
  },
  {
    name: "birthday",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "birthday_l",
      [BREAKPOINT_MEDIUM]: "birthday_m",
      [BREAKPOINT_SMALL]: "birthday_s",
    },
  },
  {
    name: "park",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "park_l",
      [BREAKPOINT_MEDIUM]: "park_m",
      [BREAKPOINT_SMALL]: "park_s",
    },
  },
  {
    name: "dance",
    fullHeight: 1369,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "dance_l",
      [BREAKPOINT_MEDIUM]: "dance_m",
      [BREAKPOINT_SMALL]: "dance_s",
    },
  },
  {
    name: "harph",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "harph_l",
      [BREAKPOINT_MEDIUM]: "harph_m",
      [BREAKPOINT_SMALL]: "harph_s",
    },
  },
  {
    name: "roses",
    fullHeight: 2981,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "roses_l",
      [BREAKPOINT_MEDIUM]: "roses_m",
      [BREAKPOINT_SMALL]: "roses_s",
    },
  },
  {
    name: "power",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "power_l",
      [BREAKPOINT_MEDIUM]: "power_m",
      [BREAKPOINT_SMALL]: "power_s",
    },
  },
  {
    name: "cage",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "cage_l",
      [BREAKPOINT_MEDIUM]: "cage_m",
      [BREAKPOINT_SMALL]: "cage_s",
    },
  },
  {
    name: "bridge",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "bridge_l",
      [BREAKPOINT_MEDIUM]: "bridge_m",
      [BREAKPOINT_SMALL]: "bridge_s",
    },
  },
  {
    name: "bush",
    fullHeight: 1365,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "bush_l",
      [BREAKPOINT_MEDIUM]: "bush_m",
      [BREAKPOINT_SMALL]: "bush_s",
    },
  },
  {
    name: "river",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "river_l",
      [BREAKPOINT_MEDIUM]: "river_m",
      [BREAKPOINT_SMALL]: "river_s",
    },
  },
  {
    name: "casual",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "casual_l",
      [BREAKPOINT_MEDIUM]: "casual_m",
      [BREAKPOINT_SMALL]: "casual_s",
    },
  },
  {
    name: "lake",
    fullHeight: 2560,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "lake_l",
      [BREAKPOINT_MEDIUM]: "lake_m",
      [BREAKPOINT_SMALL]: "lake_s",
    },
  },
  {
    name: "couple",
    fullHeight: 1365,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "couple_l",
      [BREAKPOINT_MEDIUM]: "couple_m",
      [BREAKPOINT_SMALL]: "couple_s",
    },
  },
  {
    name: "balcony",
    fullHeight: 1365,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "balcony_l",
      [BREAKPOINT_MEDIUM]: "balcony_m",
      [BREAKPOINT_SMALL]: "balcony_s",
    },
  },
  {
    name: "smile",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "smile_l",
      [BREAKPOINT_MEDIUM]: "smile_m",
      [BREAKPOINT_SMALL]: "smile_s",
    },
  },
  {
    name: "open",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "open_l",
      [BREAKPOINT_MEDIUM]: "open_m",
      [BREAKPOINT_SMALL]: "open_s",
    },
  },
  {
    name: "window",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "window_l",
      [BREAKPOINT_MEDIUM]: "window_m",
      [BREAKPOINT_SMALL]: "window_s",
    },
  },
  {
    name: "broken",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "broken_l",
      [BREAKPOINT_MEDIUM]: "broken_m",
      [BREAKPOINT_SMALL]: "broken_s",
    },
  },
  {
    name: "model",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "model_l",
      [BREAKPOINT_MEDIUM]: "model_m",
      [BREAKPOINT_SMALL]: "model_s",
    },
  },
  {
    name: "devil",
    fullHeight: 3072,
    srcSetNames: {
      [BREAKPOINT_LARGE]: "devil_l",
      [BREAKPOINT_MEDIUM]: "devil_m",
      [BREAKPOINT_SMALL]: "devil_s",
    },
  },
];

export const photos = images.map(
  ({
    name,
    fullHeight,
    srcSetNames: {
      [BREAKPOINT_LARGE]: largeName,
      [BREAKPOINT_MEDIUM]: mediumName,
      [BREAKPOINT_SMALL]: smallName,
    },
  }) => ({
    name,
    srcSet: {
      small: URL_FORMAT.replace(
        "{PLACEHOLDER}",
        `${SMALL_FOLDER_PREFIX}/${smallName}`
      ),
      medium: URL_FORMAT.replace(
        "{PLACEHOLDER}",
        `${MEDIUM_FOLDER_PREFIX}/${mediumName}`
      ),
      large: URL_FORMAT.replace(
        "{PLACEHOLDER}",
        `${LARGE_FOLDER_PREFIX}/${largeName}`
      ),
    },
    fullHeight,
    src: URL_FORMAT.replace(
      "{PLACEHOLDER}",
      `${LARGE_FOLDER_PREFIX}/${largeName}`
    ),
  })
);
