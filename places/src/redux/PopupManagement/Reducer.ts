import { createReducer } from '@reduxjs/toolkit';
import { ClosePlaceSafePopup, OpenPlaceSafePopup } from './ActionCreator';
import IPopupManagementState from './Type';

const initialState: IPopupManagementState = {
  isCreateSafePlacePopupOpen: false,
};

const popupManagementReducer = createReducer(initialState, (builder) => {
  builder.addCase(OpenPlaceSafePopup, (state) => {
    state.isCreateSafePlacePopupOpen = true
  })
  builder.addCase(ClosePlaceSafePopup, (state) => {
    state.isCreateSafePlacePopupOpen = false
  })
})


export default popupManagementReducer;
