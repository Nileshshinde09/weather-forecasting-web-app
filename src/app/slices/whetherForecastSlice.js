import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    data:null
}

const whetherForecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setForecastData:(state,actions)=>{
      state.status=true;
      state.data=actions.payload;
    },   
    removeForecastData:(state,actions)=>{
      state.status=false;
      state.data=null;
    }   
  }
})

export const { setForecastData,removeForecastData } = whetherForecastSlice.actions;

export default whetherForecastSlice.reducer;