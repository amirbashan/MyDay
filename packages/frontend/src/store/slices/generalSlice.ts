import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import config, { GeneralConfig } from '../../config';

interface IGeneralStore {
  connectedUser: string;
  dialogs: {
    isSidebarOpen: boolean;
  };
}

const initialState: IGeneralStore = {
  connectedUser: config.general.connectedUser,
  dialogs: {
    isSidebarOpen: true
  }
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateFromConfiguration(state, action: PayloadAction<GeneralConfig>) {
      state.connectedUser = action.payload.connectedUser;
    },
    openSidebar(state) {
      state.dialogs.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.dialogs.isSidebarOpen = false;
    }
  },
  extraReducers: {}
});

export const { updateFromConfiguration, openSidebar, closeSidebar } = generalSlice.actions;
export default generalSlice.reducer;
