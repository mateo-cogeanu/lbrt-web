import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../Assets/rad-logo.PNG";
import classes from "./navbar.module.css";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent!important",
          boxShadow: "none!important",
        }}
      >
        <Toolbar className={classes.navbarMain}>
          <Typography variant="h6" component="div">
            <img src={logo} alt="logo-img" width="100px" />
          </Typography>
          <Button className={classes.button}>Launch App</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
