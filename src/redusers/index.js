import { combineReducers } from 'redux';
import courses from './courseReduser';

const rootReduser = combineReducers({
	courses
});

export default rootReduser;