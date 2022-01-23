import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import CitizenRoutes from "./CitizenRoutes";
import ItAdminRouters from "./itAdminRoutes";
import SysAdminRouters from "./SysAdminRoutes";


const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AuthRoutes/>
      <CitizenRoutes/>
      <ItAdminRouters/>
      <SysAdminRouters/>
    </Router>
  );
};

export default rootRoutes;
