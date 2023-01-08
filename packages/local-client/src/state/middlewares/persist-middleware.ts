import { Action } from './../actions/index';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { saveCells } from '../action-creators';
import { RootState } from '../store';

export const persistMiddleware = ({
	dispatch,
	getState,
}: {
	dispatch: Dispatch<Action>;
	getState: () => RootState;
}) => {
	let timer: any;

	return (next: (action: Action) => void) => {
		return (action: Action) => {
			next(action);

			if (
				[
					ActionTypes.MOVE_CELL,
					ActionTypes.UPDATE_CELL,
					ActionTypes.INSERT_CELL_AFTER,
					ActionTypes.DELETE_CELL,
				].includes(action.type)
			) {
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					saveCells()(dispatch, getState);
				}, 1000);
			}
		};
	};
};
