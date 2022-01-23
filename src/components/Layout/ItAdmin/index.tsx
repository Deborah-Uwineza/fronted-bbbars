import React from "react";
import { useLocation } from "react-router-dom";
import {useStyles} from '../style';
import "../style.scss";
import Navbar from "../../Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer";
import {LayoutProps} from "../type";

const ItAdminLayout = (props: LayoutProps) => {
  const { children, subMenuItems } = props;
  const classes = useStyles();

  const pathLocation:any = useLocation().pathname;
  
  const menuItems = [
    {
      label: "Dashboard",
      link: "/itAdmin/dashboard",
      color: pathLocation === "/itAdmin/dashboard" ? "#d2435e" : ""
    },
    // {
    //   label: "request",
    //   link: "/IT_ADMIN/requests",
    //   color: pathLocation === "/itAdmin/requests" || pathLocation === "/itAdmin/requests" ? "#d2435e" : ""
    // },

    {
      label: "Materials",
      link: "/itAdmin/materials",
      color: pathLocation === "/itAdmin/materials" || pathLocation === "/itAdmin/materials" ? "#d2435e" : ""
    },
    
    {
      label: "Enfants",
      link: "/itAdmin/enfants",
      color: pathLocation === "/itAdmin/enfants" || pathLocation === "/itAdmin/enfants" ? "#d2435e" : ""
    },

    {
      label: "Items",
      link: "/itAdmin/items",
      color: pathLocation === "/itAdmin/items" || pathLocation === "/itAdmin/items" ? "#d2435e" : ""
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

        <Footer/>
      </div>
    </>
  );
};


export default ItAdminLayout;
