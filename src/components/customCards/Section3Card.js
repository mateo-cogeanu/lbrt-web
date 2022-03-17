import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import classes from "./Section3Card.module.css";

const Section3Card = ({ data }) => {
  return (
    <>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Card
          sx={{
            marginBottom: "2rem",
            padding: "1rem",
            maxWidth: 355,
            width: "100%",
          }}
          className={classes.actionCard}
        >
          <Grid sx={{ justifyContent: "center", display: "flex" }}>
            <img src={data.img} width="48px" />
          </Grid>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.cardTitle}
              // card Title
            >
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.cardText}
              // Card Text
            >
              {data.text}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Section3Card;
