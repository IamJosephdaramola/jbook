import { useMemo } from 'react';
import { useTypedDispatch } from './use-typed-selector';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
	const dispatch = useTypedDispatch();

	return useMemo(() => {
		return bindActionCreators(actionCreators, dispatch);
	}, [dispatch]);
};
