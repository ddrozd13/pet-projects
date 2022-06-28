import { createReducer } from '@reduxjs/toolkit';
import { dislikePlacesDetails, getPlacesDetails, likePlacesDetails } from './ActionCreators';
import IPlacesDetailsState from './Type';

const initialState: IPlacesDetailsState = {

};

const placesDetailsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getPlacesDetails.fulfilled, (state, action) => {
    state[action.meta.arg] = action.payload;
  });

  builder.addCase(likePlacesDetails.pending, (state, action) => {
    if (state[action.meta.arg]) {
      state[action.meta.arg]!.likes += 1;
      state[action.meta.arg]!.isLiked = true;
    };
  });
  builder.addCase(likePlacesDetails.rejected, (state, action) => {
    if (state[action.meta.arg]) {
      state[action.meta.arg]!.likes -= 1;
      state[action.meta.arg]!.isLiked = false;
    };
  });
  builder.addCase(dislikePlacesDetails.pending, (state, action) => {
    if (state[action.meta.arg]) {
      state[action.meta.arg]!.likes -= 1;
      state[action.meta.arg]!.isLiked = false;
    };
  });
  builder.addCase(dislikePlacesDetails.rejected, (state, action) => {
    if (state[action.meta.arg]) {
      state[action.meta.arg]!.likes += 1;
      state[action.meta.arg]!.isLiked = true;
    };
  });
});

export default placesDetailsReducer;
