import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import getAllPersons from '../../components/api/getAllPersons';
import getPerson from '../../components/api/getPerson';
import IGetAllPersonsActionType from './ActionType';
import { IFilterPerson } from './Type';

export const getAllPersonsAction = createAsyncThunk(IGetAllPersonsActionType.GetAll, () => {
  return getAllPersons();
});

export const getPersonAction = createAsyncThunk(IGetAllPersonsActionType.GetPerson, (id: number) =>{
  return getPerson(id);
});

export const personFilter = createAction<IFilterPerson>(IGetAllPersonsActionType.FilterPerson);
