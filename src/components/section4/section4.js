import classes from "./section4.module.css";
import solimg from "../../Assets/sol.png";
import serimg from "../../Assets/ser.png";

import { Grid, Typography } from "@mui/material";

const Section4 = () => {
  return (
    <>
      <Grid sx={{ marginTop: "5rem" }}>
        <Grid className={classes.sec4line}></Grid>
        <Grid container xs={12} sx={{ justifyContent: "center" }}>
          <Typography className={classes.line4Text}>Partners</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        sx={{ display: "flex", justifyContent: "center", marginBottom: "8rem" }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <img src={solimg} alt="solona" />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <img src={serimg} alt="serum" />
        </Grid>
      </Grid>
    </>
  );
};

export default Section4;
