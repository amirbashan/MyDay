import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const generalSelector = (state: RootState) => state.general;

const dialogsSelector = createSelector(
  [generalSelector],
  (generalSelector) => generalSelector.dialogs
);
export const isSidebarSelector = createSelector(
  [dialogsSelector],
  (dialogsSelector): boolean => dialogsSelector.isSidebarOpen
);
