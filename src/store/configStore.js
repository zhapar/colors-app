import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { devToolsEnhancer } from "redux-devtools-extension";
import palettesReducer from "./palettes";

const store = createStore(palettesReducer, devToolsEnhancer());
const persistor = persistStore(store);

export { store, persistor };
