import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWaypoint } from '../../types';
import { LatLng } from 'leaflet';

interface IRouteState {
  waypoints: IWaypoint[] | null;
  coordinates: LatLng[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: IRouteState = {
  waypoints: null,
  coordinates: null,
  isLoading: false,
  error: '',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    getRouteFetch: (state, action: PayloadAction<string>) => {
      state.error = '';
      state.isLoading = true;
    },
    getRouteSuccess: (
      state,
      action: PayloadAction<Pick<IRouteState, 'coordinates' | 'waypoints'>>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.waypoints = action.payload.waypoints;
      state.coordinates = action.payload.coordinates;
    },
    getRouteError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.waypoints = null;
      state.coordinates = null;
    },
  },
});

export const { getRouteFetch, getRouteSuccess, getRouteError } = routeSlice.actions;
export default routeSlice.reducer;
