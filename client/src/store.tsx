import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
        typeof (window as any ) === 'object' &&
      typeof (window as any ).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? (window as any ).__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
    )
    )

export type RootStore = ReturnType<typeof RootReducer>

export default store