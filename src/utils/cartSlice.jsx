import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //we are mutating the state here
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            const itemId=action.payload?.card?.info?.id;
            let indexToDelete = null;
            state.items.forEach((item,index)=>{
                if(item?.card?.info?.id==itemId){
                    indexToDelete=index;
                }
            });

            if (null!=indexToDelete && indexToDelete > -1) { // only splice array when item is found
                state.items.splice(indexToDelete, 1); // 2nd parameter means remove one item only
            }
            // state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;