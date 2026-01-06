import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:0
}

const addTocart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state) => {
            state.value+=1;
        }
    }
});

export const { addItem } = addTocart.actions;
export default addTocart.reducer;

