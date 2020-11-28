import { createAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import seedColors from "../seedColors";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["palettes"],
};

const INIT_STATE = {
  palettes: seedColors,
};

export const savePalette = createAction("savePalette");
export const deletePalette = createAction("findPalette");

const palettesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case savePalette.type:
      return { palettes: [...state.palettes, action.payload] };
    case deletePalette.type:
      return {
        palettes: state.palettes.filter(
          (palette) => palette.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, palettesReducer);
