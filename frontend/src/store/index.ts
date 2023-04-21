import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideSlice";


const store =  configureStore({
    reducer: {barState:sideBarReducer}
});


export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;
export default store;