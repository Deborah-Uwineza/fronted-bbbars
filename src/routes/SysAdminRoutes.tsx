import { Route, Switch } from "react-router-dom";
import sysAdminDashboard from "../pages/sysAdmin/Dashboard";
import CreatePrison from "../pages/sysAdmin/Prison/AddPrison";
import EditPrison from "../pages/sysAdmin/Prison/EditPrison";
import ListPrison from "../pages/sysAdmin/Prison/ListPrison";

const SysAdminRouters = () => {
  return (
    <Switch>
      <Route path="/sysAdmin/dashboard" exact component={sysAdminDashboard} />
      <Route path="/sysAdmin/prison/create" exact component={CreatePrison} />
      <Route path="/sysAdmin/prisons" exact component={ListPrison} />
      <Route path="/sysAdmin/prisons/:id" exact component={EditPrison} />
      </Switch>
  );
};

export default SysAdminRouters;
