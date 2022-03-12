import { Grid, Typography } from "@mui/material";
import classes from "./footer.module.css";
import twitterimg from "../../Assets/logo10.png";
import mediumimg from "../../Assets/logo11.png";
import discordimg from "../../Assets/logo6.png";
import weiboimg from "../../Assets/9.png";
import telegramimg from "../../Assets/logo3.png";
import logo from "../../Assets/rad-logo.PNG";
import gitimg from "../../Assets/github.svg";

const Footer = () => {
  return (
    <>
      <Grid className={classes.footerBg}>
        <Grid
          container
          lg={12}
          md={12}
          sm={10}
          xs={10}
          sx={{ justifyContent: "center" }}
        >
          <Grid
            // container
            item
            lg={3}
            md={3}
            sm={6}
            xs={6}
            // sx={{ color: "white", justifyContent: "center", display: "grid" }}
            className={classes.footerRes}
          >
            <Grid className={classes.footerText}>
              <Typography>ABOUT</Typography>
            </Grid>
            <Grid className={classes.footerline}></Grid>

            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
// Change SolScan Link for AlbertCoin
            >
              <Typography
                onClick={() => {
                  window.open("https://solscan.io/token/FvkVzKWPWMJRuP3XjSk2aKSmf5z7W9gWAtB2HAXoZaRi");
                }}
              >
                SOLSCAN
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
// Change CoinMarketCap Link for AlbertCoin
            >
              <Typography
                onClick={() => {
                  window.open("https://coinmarketcap.com/currencies/solana/");
                }}
              >
                CoinMarketCap
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
// Change Coin Gecko Link for AlbertCoin
            >
              <Typography
                onClick={() => {
                  window.open("https://www.coingecko.com/en/coins/solana");
                }}
              >
                Coin Gecko
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
// Change AlbertCoin Phantom Wallet for AlbertCoin
            >
              <Typography
                onClick={() => {
                  window.open("https://albertcoin.gitbook.io/albertcoin/getting-started/spl-wallet");
                }}
              >
                SLP Wallet
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            md={3}
            sm={6}
            xs={6}
            // sx={{ color: "white", justifyContent: "center", display: "grid" }}
            className={classes.footerRes}
          >
            <Grid className={classes.footerText}>
              <Typography>PROTOCOL</Typography>
            </Grid>
            <Grid className={classes.footerline}></Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Typography
                onClick={() => {
                  window.open("https://forms.gle/arZHA1RULVmnQuWA7");
                }}
              >
                Apply for DropZone
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Typography
                onClick={() => {
                  window.open("https://albertcoin.eu");
                }}
              >
                Apply for Fusion Pool
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Typography
                onClick={() => {
                  window.open("https://albertcoin.eu");
                }}
              >
                Apply for AcceleRaytor
              </Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Typography
                onClick={() => {
                  window.open("https://albertcoin.eu");
                }}
              >
                PermissionLess Pool
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            md={3}
            sm={6}
            xs={6}
            // sx={{ color: "white", justifyContent: "center", display: "grid" }}
            className={classes.footerRes}
          >
            <Grid className={classes.footerText}>
              <Typography>SUPPORT</Typography>
            </Grid>
            <Grid className={classes.footerline}></Grid>
            <Grid sx={{ marginBottom: "0.3rem", cursor: "pointer" }}>
              <Typography
                onClick={() => {
                  window.open("https://albertcoin.eu");
                }}
              >
                Getting Started with AlbertCoin
              </Typography>
            </Grid>
            <Grid sx={{ marginBottom: "6rem", cursor: "pointer" }}>
              <Typography
                onClick={() => {
                  window.open("https://https://albertcoin.gitbook.io/albertcoin/albert-coin/faq");
                }}
              >
                FAQ
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            lg={3}
            md={3}
            sm={6}
            xs={6}
            // sx={{ color: "white", justifyContent: "center", display: "grid" }}
            className={classes.footerRes}
          >
            <Grid className={classes.footerText}>
              <Typography>COMMUNITY</Typography>
            </Grid>
            <Grid className={classes.footerline}></Grid>
            <Grid
              sx={{
                display: "flex!important",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://twitter.com/ArtCogi");
              }}
            >
              <img src={twitterimg} width="32px" />

              <Typography sx={{ marginLeft: "0.5rem" }}>Twitter</Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://albertcoin.eu");
              }}
            >
              <img src={mediumimg} width="32px" />

              <Typography sx={{ marginLeft: "0.5rem" }}>Medium</Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://albertcoin.eu");
              }}
            >
              <img src={discordimg} width="32px" />

              <Typography sx={{ marginLeft: "0.5rem" }}>Discord</Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
// Change Github
              onClick={() => {
                window.open("https://github.com/mateo-cogeanu/lbrt-web");
              }}
            >
              <img src={gitimg} width="32px" />

              <Typography sx={{ marginLeft: "0.5rem" }}>Github</Typography>
            </Grid>
            <Grid
              sx={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
// Change Telegram
              onClick={() => {
                window.open("https://web.telegram.org/k/");
              }}
            >
              <img src={telegramimg} width="32px" />

              <Typography sx={{ marginLeft: "0.5rem" }}>Telegram</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} width="80px" />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
