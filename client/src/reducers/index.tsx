import { combineReducers } from "redux";
import cardsReducer from './cardsReducers'

 const RootReducer = combineReducers({
    cards: cardsReducer,
});

export default RootReducer