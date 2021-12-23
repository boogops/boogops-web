import {
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Store,
  Middleware,
} from "redux";
import thunk from "redux-thunk";

import { layoutReducer } from "./layout";
import {
  LayoutState,
  SetLoadingAction,
  SetOpenAction,
  SetSelectedRouteAction,
} from "./layout/types";

const loadState = (): StoreState => {
  let retval;

  const item = localStorage.getItem("state");
  if (item !== null) {
    retval = JSON.parse(item);
  }

  return retval;
};

const saveState = (state: StoreState) => {
  const item = JSON.stringify(state);
  localStorage.setItem("state", item);
};

const rootReducer = combineReducers({
  layout: layoutReducer,
});

const persistLocalStorage: Middleware = (store) => (next) => (action) => {
  next(action);
  saveState(store.getState());
};

const store = (): Store<
  CombinedState<{ layout: LayoutState }>,
  SetOpenAction | SetSelectedRouteAction | SetLoadingAction
> => {
  const persistedState: StoreState = loadState();
  const retval = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(persistLocalStorage, thunk)
  );
  return retval;
};

export { setDrawerOpen, setSelectedRoute, setLoading } from "./layout";
export type StoreState = ReturnType<typeof rootReducer>;
export default store;
