import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:"",
        activeTab:"photos",
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state, action){
            state.query = action.payload;
        },
        setActiveTabs(state,action){
            state.activeTab = action.payload;
        },
        setResult(state,action){
            state.results = action.payload;
            state.loading = false;
        },
        setLoading(state,action){
            state.loading = true;
            state.error = null;
        },
        setError(state, action){
            state.error = action.payload;
            state.loading = false;
        }
    }
});


export const {setQuery, setActiveTabs, setError, setLoading, setResult} = searchSlice.actions;
export default searchSlice.reducer;