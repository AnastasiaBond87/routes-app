import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface INavState {
  selectedItem: number | null;
}

const initialState: INavState = {
  selectedItem: null,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = navSlice.actions;
export default navSlice.reducer;
