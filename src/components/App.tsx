import { Grid } from "@mui/material";
import { AppHeader } from "./AppHeader/AppHeader";
import { Gallery } from "./Gallery/Gallery";

export const App = () => (
  <Grid container>
    <Grid item xs={12} mt={3} mb={3}>
      <AppHeader />
    </Grid>
    <Grid item xs={12}>
      <Gallery />
    </Grid>
  </Grid>
);
