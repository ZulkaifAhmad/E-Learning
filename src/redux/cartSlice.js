import {createSlice} from "@reduxjs/toolkit"

const initialState = [{slug : "example-course" , count : 1}]

const cartSlice = createSlice({
    name : "cart" ,
    initialState ,
    reducers : {
        add : (state , action) => {
            let para = action.payload
            let exists = state.find((item)=> item.slug === para.slug)
            if(exists){
                exists.count += 1
            } else {
                state.push(para)
            }
        } ,
        remove : (state , action) => {
            const {slug} = action.payload
            let exists = state.find(item => item.slug === slug);
            if(exists) {
                let result = state.filter(item => item.slug != slug)
                return result;
            }
        }
    }
})

export const {add , remove} = cartSlice.actions
export default cartSlice.reducer