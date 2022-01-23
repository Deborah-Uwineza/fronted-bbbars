import { Route, Switch } from "react-router-dom";
import ItAdminDashboard from "../pages/itAdmin/Dashboard";
import CreateEnfant from "../pages/itAdmin/Enfant/AddEnfant";
import EditEnfant from "../pages/itAdmin/Enfant/EditEnfant";
import ListEnfant from "../pages/itAdmin/Enfant/ListEnfant";
import CreateItem from "../pages/itAdmin/Items/AddItem";
import EditItem from "../pages/itAdmin/Items/EditItem";
import ListItem from "../pages/itAdmin/Items/ListItem";
import createMaterial from "../pages/itAdmin/Material/AddMaterial";
import EditMaterial from "../pages/itAdmin/Material/EditMaterial";
import ListMaterial from "../pages/itAdmin/Material/ListMaterial";



const ItAdminRouters = () => {
  return (
    <Switch>
      <Route path="/itAdmin/dashboard" exact component={ItAdminDashboard} />
      <Route path="/itAdmin/materials/create" exact component={createMaterial} />
      <Route path="/itAdmin/materials" exact component={ListMaterial} />
      <Route path="/itAdmin/materials/:id" exact component={EditMaterial} />
      <Route path="/itAdmin/items/create" exact component={CreateItem} />
      <Route path="/itAdmin/items" exact component={ListItem} />
      <Route path="/itAdmin/items/:id" exact component={EditItem} />
      <Route path="/itAdmin/enfants/create" exact component={CreateEnfant} />
      <Route path="/itAdmin/enfants" exact component={ListEnfant} />
      <Route path="/itAdmin/enfants/:id" exact component={EditEnfant} />
    </Switch>
  );
};

export default ItAdminRouters;
