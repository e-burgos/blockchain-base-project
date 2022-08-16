import React, { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from "./styles/footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          target="_blank"
          href="https://www.estebanburgos.com.ar/"
        >
          Esteban Burgos
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
