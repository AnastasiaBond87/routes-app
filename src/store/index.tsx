import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ReducerNames } from '../constants';
import navSlice from './slices/navSlice';
import routeSlice from './slices/routeSlice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ [ReducerNames.nav]: navSlice, [ReducerNames.route]: routeSlice });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredPaths: ['route.coordinates'],
        ignoredActions: ['route/getRouteSuccess'],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
