import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import classes from "./ActionCards.module.css";

const ActionCards = ({ data }) => {
  return (
    <>
      <Grid xs={12}>
        {/* <Grid item> */}
        <Card
          sx={{
            // justifyContent: "center",
            // display: "flex!important",
            marginBottom: "2rem",
            padding: "0.5rem",
            maxWidth: 275,
            width: "100%",
          }}
          className={classes.actionCard}
        >
          {/* <CardMedia
            component="img"
            height="130"
            width="30"
            src={data.img}
            alt="green iguana"
          /> */}
          <Grid sx={{ justifyContent: "center", display: "flex" }}>
            <img src={data.img} width="48px" />
          </Grid>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.cardTitle}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.cardText}
            >
              {data.text}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button className={classes.cardButton}>{data.button}</Button>
          </CardActions>
        </Card>
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export default ActionCards;
