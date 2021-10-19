import { applyMiddleware, createStore,compose } from "redux";
import thunk from "redux-thunk";
import {Reducer} from './reducers/cardsReducers'

export const store = createStore(Reducer,
    compose(
        applyMiddleware(thunk),
        typeof (window as any ) === 'object' &&
      typeof (window as any ).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? (window as any ).__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
    )
    )