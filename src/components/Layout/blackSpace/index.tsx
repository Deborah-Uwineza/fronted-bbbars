import React from "react";
import { useLocation } from "react-router-dom";
import {useStyles} from '../style';
import "../style.scss";
import Navbar from "../../Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer";
import {LayoutProps} from "../type";


function AuthLayout(props: LayoutProps) {
  const { children, subMenuItems } = props;
  const classes = useStyles();

  const pathLocation: any = useLocation().pathname;

  const menuItems = [
    {
      label: "Profile",
      link: "/profile",
      color: pathLocation === "/profile" ? "#d2435e" : ""
    },
    {
      label: "contact",
      link: "/contact",
      color: pathLocation === "/contact" ? "#d2435e" : ""
    },
  ];

  return (
    <>
      <div className={classes.root}>
      
        <div className={classes.container}>
  
          <Grid container spacing={3}>
            {/* Top navigation bar */}
           
            <Grid item xs={12} style={{ height: "12vh" }}>
              <Navbar menuItems={menuItems} />
            </Grid>
            {subMenuItems && (
              // Left side menu
              <Grid item xs={12} sm={2}>
              </Grid>
            )}

            <Grid item xs>
              <main className={classes.papers}>{children}</main>
            </Grid>
          </Grid>

        

        </div>

        <Footer />
      </div>
    </>
  );
}

export default AuthLayout;
