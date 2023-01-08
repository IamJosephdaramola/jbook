import { combineReducers } from 'redux';
import cellsReducer from './cellsReducers';
import bundlesReducer from './bundlesReducer';

const reducers = combineReducers({
	cells: cellsReducer,
	bundles: bundlesReducer,
});

export default reducers;
