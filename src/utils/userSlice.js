import { createSlice } from "@reduxjs/toolkit";
import { getAdditionalUserInfo } from "firebase/auth";
import { remove } from "firebase/database";


const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
              return action.payload;
        },
        removeUser:(state,action)=>{
               return null;
        },
    },
})

export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;