import { createSlice } from "@reduxjs/toolkit";

interface sideState {
    state:boolean
}

const initialState:sideState = {state:true}
const sideBarSlice = createSlice({
    name: "sideBarSlice",
    initialState,
    reducers:{
        toggle: (state:sideState)=>{
                state.state =  !state.state;
        }
    }
});


export const {toggle} = sideBarSlice.actions;
const sideBarReducer =  sideBarSlice.reducer;
export default sideBarReducer;