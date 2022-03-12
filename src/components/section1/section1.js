import classes from "./section1.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import solona from "../../Assets/solona.png";
import secicon from "../../Assets/d.png";

const Section1 = () => {
  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid className={classes.secBg}>
          <Grid container sx={{ justifyContent: "center", marginTop: "5rem" }}>
            <Grid sm={12}>
              <Typography className={classes.section1Title}>
// First part of the BIG text on the landing page
                An avenue for
              </Typography>

              <Typography className={classes.section1Title}>
// Second part of the BIG text on the landing page
                the evolution of
                <Typography className={classes.defi}>DeFi</Typography>
              </Typography>
// Slogan of the Crypto - AlbertCoin
              <Typography className={classes.secText}>
                Lightning fast · Near-zero fees · Permissionless
              </Typography>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button className={classes.buttonStyle}>
                  Launch app
                  <img
                    src={secicon}
                    style={{ marginLeft: "0.2rem", color: "#665d11" }}
                  />
                </Button>
                <Button className={classes.secButton}>Read docs</Button>
              </Grid>
            </Grid>

            <Grid
              container
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{
                justifyContent: "center",
                display: "flex!important",
                marginTop: "2rem",
                padding: "1rem",
              }}
            >
              <Grid
                lg={5}
                md={5}
                sm={6}
                xs={12}
                sx={{ marginBottom: "0.5rem" }}
              >
                <Card sx={{ maxWidth: 300 }} className={classes.secCard}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.cardText}
                      >
                        TOTAL VALUE LOCKED
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.cardSubText}
                      >
// Ammount of Value Locked AlbertCoin
                        $ 21,000,000
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid
                lg={5}
                md={5}
                sm={6}
                xs={12}
                sx={{ marginBottom: "0.5rem" }}
              >
                <Card sx={{ maxWidth: 300 }} className={classes.secCard}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.cardText}
                      >
                        TOTAL TRADING VOLUME
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.cardSubText}
                      >
// Ammount of Total Trading Volume AlbertCoin
                        $ 12,350
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid>
              <img src={solona} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Section1;
