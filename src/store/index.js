import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from "../utility/browser-storage";

import AuthRedux from './AuthRedux';
import AuthFrappeRedux from './AuthFrappeRedux';
import PromoRedux from './PromoRedux';

const reducers = combineReducers({
  auth: AuthRedux,
  authfrappe: AuthFrappeRedux,
  Promo: PromoRedux,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState('redux'),
});