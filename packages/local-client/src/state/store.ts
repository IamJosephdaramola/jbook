import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middlewares';

export const store = createStore(
	reducers,
	{},
	applyMiddleware(persistMiddleware, thunk)
);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
