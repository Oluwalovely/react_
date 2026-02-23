import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appslice",
    initialState:{
        firstName:"Emmie",
        lastName:"",
        email:"",
        friends:['emmie', 'nony', 'MB']
    },

    reducers:{
        changeFirst:(state)=>{
            state.firstName = 'Lovely'
        },

        changeNameWithSome: (state, actions)=>{
            state.firstName = state.payload
        }
    }
})


export default appSlice.reducer

export const {changeFirst, changeNameWithSome} = appSlice.actions