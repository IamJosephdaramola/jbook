import { Action } from './../actions/index';
import { ActionTypes } from '../action-types';
import axios from 'axios';
import { Dispatch } from 'redux';
import {
	UpdateCellAction,
	DeleteCellAction,
	MoveCellAction,
	InsertCellAfterAction,
	Direction,
} from '../actions';
import { CellTypes, Cell } from '../cell';
import { RootState } from '../store';

export const updateCell = (id: string, content: string): UpdateCellAction => {
	return {
		type: ActionTypes.UPDATE_CELL,
		payload: {
			id,
			content,
		},
	};
};

export const deleteCell = (id: string): DeleteCellAction => {
	return {
		type: ActionTypes.DELETE_CELL,
		payload: id,
	};
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
	return {
		type: ActionTypes.MOVE_CELL,
		payload: {
			id,
			direction,
		},
	};
};

export const insertCellAfter = (
	id: string | null,
	cellType: CellTypes
): InsertCellAfterAction => {
	return {
		type: ActionTypes.INSERT_CELL_AFTER,
		payload: {
			id,
			type: cellType,
		},
	};
};

export const fetchCells = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionTypes.FETCH_CELLS });

	try {
		const { data }: { data: Cell[] } = await axios.get('/cells');

		dispatch({
			type: ActionTypes.FETCH_CELLS_COMPLETE,
			payload: data,
		});
	} catch (err) {
		if (err instanceof Error) {
			dispatch({
				type: ActionTypes.FETCH_CELLS_ERROR,
				payload: err.message,
			});
		}
	}
};

export const saveCells =
	() => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
		const {
			cells: { data, order },
		} = getState();

		const cells = order.map((id) => data[id]);

		try {
			await axios.post('/cells', { cells });
		} catch (err) {
			if (err instanceof Error) {
				dispatch({
					type: ActionTypes.SAVE_CELLS_ERROR,
					payload: err.message,
				});
			}
		}
	};
