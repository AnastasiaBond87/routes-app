import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWaypoint } from '../../types';
import { LatLngExpression } from 'leaflet';

interface IRouteState {
  waypoints: IWaypoint[] | null;
  coordinates: LatLngExpression[] | null;
  distance: number | null;
  isLoading: boolean;
  error: string;
}

const initialState: IRouteState = {
  waypoints: null,
  coordinates: null,
  distance: null,
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
      action: PayloadAction<Pick<IRouteState, 'coordinates' | 'waypoints' | 'distance'>>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.waypoints = action.payload.waypoints;
      state.coordinates = action.payload.coordinates;
      state.distance = action.payload.distance;
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
