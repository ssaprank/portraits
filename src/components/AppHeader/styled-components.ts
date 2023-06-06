import { Box, styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SimpleHeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginInline: "2em",
  justifyContent: "space-between",
  columnGap: "2em",
});

export const MyInstaIcon = styled(InstagramIcon)({
  cursor: "pointer",
  transition: "all 0.4s ease-in-out",
  fontSize: "2.5em",
  textDecoration: "none",
  color: "rgba(108, 76, 52, 1)",

  "&:hover": {
    transform: "scale(1.1)",
    dropShadow: "-0.5em -0.5em 0.5em #AAA",
  },
});
