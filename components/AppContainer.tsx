import React, { FunctionComponent } from "react";
import Image from "next/image";
import { useLocalData } from "../hooks/useLocalData";
import { Paper, Container, Typography, Button } from "@mui/material";
import { useWeb3Context } from "../context";
import Footer from "./common/Footer";
import Header from "./common/Header";
import CircularLoading from "./common/CircularLoading";
import InfoContainer from "./common/InfoContainer";
import Web3Container from "./web3/Web3Container";
import { Web3Button } from "./web3/Web3Button";
import styles from "./styles/app-container.module.css";

const AppContainer: FunctionComponent = () => {
  const { web3Provider } = useWeb3Context();
  const { data, error } = useLocalData();

  const goToMetamask = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl",
      "_blank",
      "noopener"
    );
  };

  return (
    <>
      {data && <Header title="NEW DAPP" />}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {web3Provider && <Web3Container />}
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 4 },
            mb: { xs: 6, md: 5 },
            p: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {data && (
            <>
              <Typography component="h1" variant="h4" align="center">
                {data.title}
              </Typography>
              <Image
                src={data.image}
                width="300px"
                height="300px"
                alt="web3 logo"
              />
              <Typography component="h2" variant="caption" align="center">
                {data.description}
              </Typography>
              {!web3Provider && (
                <div className={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={goToMetamask}
                  >
                    {"Get Metamask"}
                  </Button>
                  <Web3Button
                    colorConnect="secondary"
                    colorDisconnect="secondary"
                  />
                </div>
              )}
            </>
          )}
          {error && (
            <InfoContainer
              message="An unexpected error occurred, please try again later, thanks!"
              isError
            />
          )}
          {!error && !data && <CircularLoading />}
        </Paper>
        <Footer />
      </Container>
    </>
  );
};

export default AppContainer;
