import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import CitizenRoutes from "./CitizenRoutes";
import SysAdminRouters from "./SysAdminRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ItAdminRouters from "./itAdminRoutes";


const rootRoutes: FunctionComponent = () => {
  return (
    <Router>

      <AuthRoutes />
      <CitizenRoutes />
      <ItAdminRouters/>
      <SysAdminRouters />

    </Router>
  );
};

export default rootRoutes;
