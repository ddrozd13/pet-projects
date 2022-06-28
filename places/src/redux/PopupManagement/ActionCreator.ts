import { createAction } from '@reduxjs/toolkit';
import PopupManagementActionType from './ActionType';

export const OpenPlaceSafePopup = createAction(PopupManagementActionType.OpenSafePlacePopup)
export const ClosePlaceSafePopup = createAction(PopupManagementActionType.CloseSafePlacePopup)