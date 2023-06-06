import { Typography } from "@mui/material";
import { MyInstaIcon, SimpleHeaderBox } from "./styled-components";

export const AppHeader = () => (
  <SimpleHeaderBox>
    <Typography variant="h2" align="center" fontFamily="Italianno, cursive">
      Saprankov S. Portrait Photography
    </Typography>

    <a target="_blank" href="https://www.instagram.com/saprankov.art/">
      <MyInstaIcon />
    </a>
  </SimpleHeaderBox>
);
