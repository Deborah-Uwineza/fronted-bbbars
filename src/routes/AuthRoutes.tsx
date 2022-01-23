import { Route, Switch } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/signup";



const SupporterRouters = () => {
  return (
    <Switch>
     
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
};

export default SupporterRouters;
