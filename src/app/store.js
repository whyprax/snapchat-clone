import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "../features/cameraSlice";

export default configureStore({
  reducer: {
    camera: cameraReducer,
  },
});
