import classes from "./homepage.module.css";
import { Container, Grid } from "@mui/material";
import NavBar from "../../components/navbar/navbar";
import Section1 from "../../components/section1/section1";
import Section2 from "../../components/section2/section2";
import Section3 from "../../components/section3/section3";
import Section4 from "../../components/section4/section4";
import Footer from "../../components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Grid className={classes.homeBg}>
        <Grid>
          <NavBar />
        </Grid>
        <Container>
          <Grid>
            <Section1 />
          </Grid>
        </Container>
        <Grid>
          <Section2 />
        </Grid>
        <Grid>
          <Section3 />
        </Grid>
        <Grid>
          <Section4 />
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
