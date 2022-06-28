import { createAsyncThunk } from '@reduxjs/toolkit';
import PlacesApi from '../../api/Places';
import IPlacesDetailsActionType from './ActionType';

const placesApi = new PlacesApi();

export const getPlacesDetails = createAsyncThunk(IPlacesDetailsActionType.GetPlacesDetails, (id: string) => {
  return placesApi.getById(id);
});

export const likePlacesDetails = createAsyncThunk(IPlacesDetailsActionType.Like, (id: string) => {
  return placesApi.like(id);
});

export const dislikePlacesDetails = createAsyncThunk(IPlacesDetailsActionType.DisLike, (id: string) => {
  return placesApi.dislike(id);
});
