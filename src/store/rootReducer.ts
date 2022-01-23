import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { adopterReducer } from "./Citizen/Adopter/reducer";
import { supportReducer } from "./Citizen/Support/reducer";
import { enfantReducer } from "./ItAdmin/Enfant/reducer";
import { itemReducer } from "./ItAdmin/Item/reducer";
import { materialReducer } from "./ItAdmin/Material/reducer";
import { prisonReducer } from "./SysAdmin/Prison/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  prison:prisonReducer,
  material:materialReducer,
  adopter:adopterReducer,
  enfant:enfantReducer,
  item:itemReducer,
  support:supportReducer,
  
  
});
