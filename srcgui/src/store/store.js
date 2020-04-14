import { createStore, applyMiddleware, combineReducers } from 'redux';
import  {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reduces/auth';

const middleware=[thunk]; 

const reduc = combineReducers({
     reducer
});

const store = createStore(
    reduc,
    composeWithDevTools(
        applyMiddleware(...middleware))
);

export default store; 

