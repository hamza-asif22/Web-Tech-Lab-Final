import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './Redux/dragons/dragonsSlice';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsSlice,
    missions: missionSlice,
  },
},
applyMiddleware(thunk, logger));

const selectMissions = (store) => store.missions;
const selectDragons = (store) => store.dragons;

export { selectMissions, selectDragons };

export default store;