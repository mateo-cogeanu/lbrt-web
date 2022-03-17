import { Grid, Typography } from "@mui/material";
import Section3Card from "../customCards/Section3Card";
import classes from "./section3.module.css";
const Section3 = () => {
  const data = [
    {
      id: 1,
      title: "Order Book AMM",
      img: require("../../Assets/logo1.png"),
      text: "Raydium's AMM interacts with Serum's central limit order book, meaning that pools have access to all order flow and liquidity on Serum, and vice versa.",
    },
    {
      id: 2,
      title: "Best Price Swaps",
      img: require("../../Assets/logo4.png"),
      text: "Raydium determines whether swapping within a liquidity pool or through the Serum order book will provide the best price for the user, and executes accordingly.",
    },
    {
      id: 3,
      title: "High-Liquidity Launches",
      img: require("../../Assets/logo8.png"),
      text: "AcceleRaytor offers projects a straightforward 3 step process to raise funds and bootstrap liquidity on Raydium and Serum.",
    },
  ];
  return (
    <>
      <Grid
        className={classes.Section3Bg}
        sx={{
          marginTop: "10rem",
        }}
      >
        <Grid
          lg={12}
          sx={{
            marginTop: "5rem",
          }}
        >
          <Grid className={classes.radline}></Grid>
          <Grid container xs={12} sx={{ justifyContent: "center" }}>
            <Typography className={classes.radlineText}>
              Raydium provides Ecosystem-Wide Liquidity for users and projects
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          sx={{
            justifyContent: "center",
            display: "flex!important",
            marginTop: "2rem",
          }}
        >
          {data.map((x) => (
            <Grid
              container
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ display: "flex" }}
              className={classes.action}
            >
              <Section3Card data={x} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Section3;
