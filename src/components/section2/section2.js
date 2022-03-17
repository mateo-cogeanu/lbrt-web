import { Grid, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import ActionCards from "../customCards/ActionCards";
import classes from "./section2.module.css";

const Section2 = () => {
  const data = [
    ////trade section
    {
      id: 1,
      img: require("../../Assets/logo7.png"),

      title: "Trade",
      button: "Enter Exchange",
      text: "Swap or Trade quickly and cheaply.",
    },

    ///yeild Section
    {
      id: 2,
      title: "Yield",
      button: "Enter Farms",
      text: "Earn yield through fees and yield farms.",
      img: require("../../Assets/logo5.png"),
    },

    ///pool Section
    {
      id: 3,
      title: "Pool",
      button: "Add Liquidity",
      text: "Provide liquidity for any SPL token.",
      img: require("../../Assets/logo2.png"),
    },

    ////AcceleRaytor Section
    {
      id: 4,
      title: "AcceleRaytor",
      button: "View Projects",
      img: require("../../Assets/logo8.png"),
      text: "Launchpad for new Solana projects.",
    },
  ];
  return (
    <>
      <Grid
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          //   backgroundColor: "blue",
        }}
      >
        <Grid
          container
          lg={10}
          md={11}
          sm={10}
          xs={10}
          className={classes.sec2Style}
        >
          <Grid lg={12} className={classes.secondbg}></Grid>

          <Grid lg={12} md={12} sm={12} xs={12} sx={{ marginTop: "5rem" }}>
            <Grid className={classes.line}></Grid>
            <Grid xs={12}>
              <Typography className={classes.lineText}>
                A suite of features powering the evolution of DeFi on Solana
              </Typography>
            </Grid>
          </Grid>
          {data.map((x) => (
            <Grid
              container
              lg={3}
              md={3}
              sm={6}
              xs={12}
              sx={{ display: "flex" }}
              className={classes.action}
            >
              <ActionCards data={x} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Section2;
