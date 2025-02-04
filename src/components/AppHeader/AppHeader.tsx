import { Typography } from "@mui/material";
import { MyInstaIcon, SimpleHeaderBox } from "./styled-components";

export const AppHeader = () => (
  <SimpleHeaderBox>
    <Typography variant="h2" align="center" fontFamily="Italianno, cursive">
      Stanislav Amelin Portrait Photography
    </Typography>

    <a target="_blank" href="https://www.instagram.com/amelin.photography/">
      <MyInstaIcon />
    </a>
  </SimpleHeaderBox>
);
