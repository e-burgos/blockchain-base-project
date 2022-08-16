import React, { FunctionComponent } from "react";
import { Paper } from "@mui/material";
import styles from "./styles/web3-container.module.css";
import { Web3Address } from "./Web3Address";
import { Web3Balance } from "./Web3Balance";
import { Web3Network } from "./Web3Network";
import { Web3ContactBalance } from "./Web3ContactBalance";

const Web3Container: FunctionComponent = () => {
  return (
    <Paper className={styles.container} variant="outlined">
      <Web3Address />
      <Web3Network />
      <Web3Balance />
      <Web3ContactBalance />
    </Paper>
  );
};

export default Web3Container;
