import { Route, Switch } from "react-router-dom";
import CreateAdopter from "../pages/citizen/Adopter/AddAdopter";
import ListAdopter from "../pages/citizen/Adopter/ListAdopter";
import ListSupport from "../pages/citizen/Support/ListSupport";
import CitizenDashboard from "../pages/citizen/Dashboard";
import CreateSupport from "../pages/citizen/Support/AddSupport";
import ListEnfant from "../pages/itAdmin/Enfant/ListEnfant";
import EditAdopter from "../pages/citizen/Adopter/EditAdopter";
import EditSupport from "../pages/citizen/Support/EditSupport";




const CitizenRoutes = () => {
  return (
    <Switch>
      <Route path="/citizen/dashboard" exact component={CitizenDashboard} />
      <Route path="/citizen/adopter/create" exact component={CreateAdopter} />
      <Route path="/citizen/adopter" exact component={ListAdopter} />
      <Route path="/citizen/support/create" exact component={CreateSupport} />
      <Route path="/citizen/support" exact component={ListSupport} />
      <Route path="/citizen/support/:id" exact component={EditSupport} />
      <Route path="/citizen/adopter/:id" exact component={EditAdopter} />
    </Switch>
      );
};

export default CitizenRoutes;