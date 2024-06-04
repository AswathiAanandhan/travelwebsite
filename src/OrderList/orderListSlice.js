import { createSlice } from "@reduxjs/toolkit";

export const orderListSlice=createSlice({
    name:"orderList",
    initialState:{
        value:undefined
    },
    reducers:{
        get_order_list:(state,action)=>{
           state.value=action.payload.orderListData
        }
    }

})
export const {get_order_list} =orderListSlice.actions;
export default orderListSlice.reducer