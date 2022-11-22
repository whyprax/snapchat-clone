import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.value = action.payload;
    },
    resetCameraImage: (state) => {
      state.value = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;
export const selectCameraImage = (state) => state.camera.cameraImage;
export default cameraSlice.reducer;
