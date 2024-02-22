import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{name:"rohan"},
    genres:{}
  },
  reducers: {
    getApiConfiguration: (state,action) => {
     state.url = action.payload;
    },
    getgenres: (state,action) => {
        state.genres = action.payload;
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration,getgenres} = homeSlice.actions

export default homeSlice.reducer