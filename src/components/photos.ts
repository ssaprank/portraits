import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

// const breakpoints = [2160, 1080, 640, 384, 256, 128];

const cloud = new Cloudinary({
  cloud: {
    cloudName: "dlhhw8bit",
  },
});

const images = [
  {
    name: "IMG_1971_qoxeak",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_7487_y4amo6",
    width: 3456,
    height: 5184,
  },
  {
    name: "IMG_6544-Edit_hzwcge",
    width: 5768,
    height: 3856,
  },
  {
    name: "IMG_8287-Edit1_warvnk",
    width: 3707,
    height: 5561,
  },
  {
    name: "IMG_8456-Edit_mvkda2",
    width: 3917,
    height: 5701,
  },
  {
    name: "IMG_6662_jff9rp",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_7508-PP4_pspz9c",
    width: 2532,
    height: 3798,
  },
  {
    name: "bridge_f4cvkk",
    width: 4160,
    height: 6240,
  },
  {
    name: "bush_slcgzy",
    width: 624,
    height: 416,
  },
  {
    name: "river_mmmhj4",
    width: 3435,
    height: 5152,
  },
  {
    name: "IMG_0204_cf8ye7",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_0111_crop_onlaox",
    width: 5051,
    height: 6314,
  },
  {
    name: "IMG_5143_ihgeof",
    width: 6240,
    height: 4160,
  },
  {
    name: "IMG_1767_ti4nq8",
    width: 6240,
    height: 4160,
  },
  {
    name: "IMG_5739_xkessa",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_1559_gradient_es9iac",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_8882_w6jvqp",
    width: 2821,
    height: 4231,
  },
  {
    name: "IMG_9160_eduduc",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_8614_gyftlg",
    width: 4160,
    height: 6240,
  },
  {
    name: "IMG_1139_jl8thf",
    width: 4160,
    height: 6240,
  },
].map((item) => ({ ...item, name: `portraits-website/${item.name}` }));

export const photos = images.map(({ name, width, height }) => ({
  src: cloud.image(name).resize(fill().width(2160)).toURL(),
  width,
  height,
}));
