import { call, put } from 'redux-saga/effects';
import { getRoute } from '../../../api/routeApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { IRouteResponse } from '../../../types';
import { getRouteError, getRouteSuccess } from '../../slices/routeSlice';
import { getLatLang } from '../../../utils/getLatLng';

function* getRouteSaga(action: PayloadAction<string>) {
  try {
    const data: IRouteResponse = yield call(getRoute, action.payload);

    const { waypoints, geometry } = data;
    const coordinates = getLatLang(geometry);

    yield put(getRouteSuccess({ waypoints, coordinates }));
  } catch (error) {
    const { message } = error as Error;

    yield put(getRouteError(message));
  }
}

export default getRouteSaga;
