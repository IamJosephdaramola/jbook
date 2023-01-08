import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { BundleCompleteAction, BundleStartAction } from '../actions';
import bundle from '../../bundler';

export const createBundle = (cellId: string, input: string) => {
	return async (
		dispatch: Dispatch<BundleStartAction | BundleCompleteAction>
	) => {
		dispatch({
			type: ActionTypes.BUNDLE_START,
			payload: {
				cellId,
			},
		});

		const result = await bundle(input);

		dispatch({
			type: ActionTypes.BUNDLE_COMPLETE,
			payload: {
				cellId,
				bundle: result,
			},
		});
	};
};
