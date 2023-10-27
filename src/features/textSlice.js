import {createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
  name: 'text',
  initialState: {
    textString: "",
  },
  reducers: {
   setTextString : (state, action) =>{
    state.textString = action.payload;  //el payload es el contenido que le estoy pasando en los imput
   }
  },
});

export const { setTextString } = textSlice.actions;

export const selectTextString = (state) => state.text.textString; //capacidad para consumir los states


export default textSlice.reducer;
