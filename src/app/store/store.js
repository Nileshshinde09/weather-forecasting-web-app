import {configureStore} from '@reduxjs/toolkit';
import themeSlice from '../slices/themeSlice.js';
import whetherForecastSlice from '../slices/whetherForecastSlice.js';
const store = configureStore({
    reducer: {  
        theme:themeSlice,
        forecast:whetherForecastSlice    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
});


export default store;