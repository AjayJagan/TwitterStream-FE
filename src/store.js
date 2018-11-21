import { createStore, applyMiddleware, compose } from 'redux';
import SocketMiddleWare from './middlewares/socket';
import combineReducer from './rootReducer';
import thunk from 'redux-thunk';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(combineReducer, {}, compose(applyMiddleware(thunk,SocketMiddleWare), devTools));

export default store;