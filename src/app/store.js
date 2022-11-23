import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "../features/cameraSlice";
import appReducer from "../features/appSlice";

export default configureStore({
  reducer: {
    camera: cameraReducer,
    app: appReducer,
  },
});
