import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import config, { GeneralConfig } from '../../config';

interface IGeneralStore {
  connectedUser: string;
}

const initialState: IGeneralStore = {
  connectedUser: config.general.connectedUser
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateFromConfiguration(state, action: PayloadAction<GeneralConfig>) {
      state.connectedUser = action.payload.connectedUser;
    }
  },
  extraReducers: {}
});

export const { updateFromConfiguration } = generalSlice.actions;
export default generalSlice.reducer;
