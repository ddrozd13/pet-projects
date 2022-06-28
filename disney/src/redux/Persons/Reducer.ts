import { IGetAllPersonsState, IGetPersonState } from './Type';
import { createReducer } from '@reduxjs/toolkit';
import { getAllPersonsAction, getPersonAction, personFilter } from './ActionCreator';
import { sortBy } from 'lodash';


export const initialState: IGetAllPersonsState = {
  persons: undefined,
  filterPerson: {
    films: null,
    shortFilms: null,
    tvShows: null,
    videoGames: null
  },
}

export const newInitialState: IGetPersonState = {
  person: undefined,
}

export const getAllPersonsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllPersonsAction.fulfilled, (state, action) => {
    state.persons = sortBy(action.payload, o => o.name);
  });
  builder.addCase(personFilter, (state, action) => {
    state.filterPerson = action.payload;
  });
})

export const getPersonReducer = createReducer(newInitialState, (builder) => {
  builder.addCase(getPersonAction.fulfilled, (state, action) => {
    state.person = action.payload;
  })
})