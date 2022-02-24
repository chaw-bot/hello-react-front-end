import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetings from './greetings/greetings';

const rootReducer = combineReducers({ greetings });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
