import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const breakpoints = [2160, 1080, 640, 384, 256, 128];

const cloud = new Cloudinary({
  cloud: {
    cloudName: "dlhhw8bit",
  },
});

// const namesTest = [
//   "IMG_8716-2_mstqny",
//   "IMG_7515-2_ysrwuz",
//   "IMG_7487_wzkjna",
//   "IMG_0069_oaelrf",
//   "IMG_8246_hngsid",
//   "IMG_8419_ocuom4",
//   "IMG_0096_tpcrls",
//   "IMG_0188_tejyrp",
// ].map((item) => `portraits-website-test/${item}`);

const names = [
  "IMG_1971_qoxeak",
  "IMG_7487_y4amo6",
  "IMG_6544-Edit_hzwcge",

  "IMG_8287-Edit1_warvnk",
  "IMG_8456-Edit_mvkda2",
  "IMG_6662_jff9rp",
  "IMG_7508-PP4_pspz9c",
  "bridge_f4cvkk",
  "bush_slcgzy",
  "river_mmmhj4",
  "IMG_0204_cf8ye7",
].map((item) => `portraits-website/${item}`);

export const photos = names.map((name) => {
  const img = cloud.image(name);

  const urls = breakpoints.map((bp) => img.resize(fill().width(bp)).toURL());

  return {
    src: urls[0],
    srcSet: urls.map((url, i) => ({ src: url, width: breakpoints[i] })),
  };
});
