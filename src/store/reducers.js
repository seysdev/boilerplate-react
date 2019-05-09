import { combineReducers } from 'redux';
import { Login } from '../features/login/store/reducers';

const rootReducer = combineReducers({
  Login
});

export {
  rootReducer
}
