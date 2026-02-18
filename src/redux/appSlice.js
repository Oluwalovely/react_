import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appslice",
    initialState:{
        firstName:"",
        lastName:"",
        email:"",
        friends:[]
    }
})