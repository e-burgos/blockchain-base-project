import React, { FunctionComponent } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import {
  Toolbar,
  Typography,
  AppBar,
  LinearProgress,
  Grid,
} from "@mui/material";
import { Web3Button } from "../web3/Web3Button";
import styles from "./styles/header.module.css";

interface Props {
  title: string;
}

const Header: FunctionComponent<Props> = ({ title }) => {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Grid display="flex" flexDirection="row" alignItems="center">
              <div className={styles.logo}>
                <Image className={styles.image} src={Logo} alt="logo" />
              </div>
              <Typography
                className={styles.title}
                variant="h5"
                color="inherit"
                noWrap
              >
                {title}
              </Typography>
            </Grid>
            <Web3Button colorConnect="secondary" colorDisconnect="secondary" />
          </Grid>
        </Toolbar>
        <LinearProgress
          value={100}
          className={styles.linearProgress}
          color={"secondary"}
          variant={"determinate"}
        />
      </AppBar>
    </>
  );
};

export default Header;
