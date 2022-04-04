const { createSlice } = require("@reduxjs/toolkit");

const courseSlice = createSlice({
  name: "course",
  initialState: {
    currentCourse: null
  },
  reducers: {
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    }
  }
});

export const { setCurrentCourse } = courseSlice.actions;
export default courseSlice.reducer;
