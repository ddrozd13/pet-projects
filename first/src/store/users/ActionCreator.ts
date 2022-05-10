import { createAction } from '@reduxjs/toolkit';
import IUserActionType from './ActionType';
import IUserState from './Type';

export const setUserAction = createAction<IUserState>(IUserActionType.SetUser);
export const removeUserAction = createAction(IUserActionType.RemoveUser);